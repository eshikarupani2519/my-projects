const canvas = document.getElementById('canvas');
    const form = document.getElementById('propertyForm');
    let selectedElement = null;

    // Drag setup
    document.querySelectorAll('.item').forEach(item => {
      item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('type', e.target.dataset.type);
      });
    });

    canvas.addEventListener('dragover', e => e.preventDefault());

    canvas.addEventListener('drop', (e) => {
      e.preventDefault();
      const type = e.dataTransfer.getData('type');

      const canvasRect = canvas.getBoundingClientRect();
      const x = e.clientX - canvasRect.left;
      const y = e.clientY - canvasRect.top;

      createElement(type, x, y);
      saveCanvasState();
    });

    function createElement(type, x, y, props = {}) {
      const wrapper = document.createElement('div');
      wrapper.className = 'wrapper';
      wrapper.style.left = x + 'px';
      wrapper.style.top = y + 'px';

      let el;
      if (type === 'text') {
        el = document.createElement('div');
        el.innerText = props.content || 'Edit me';
        el.style.fontSize = props.fontSize || '16px';
      } else if (type === 'image') {
        el = document.createElement('img');
        el.src = props.src || 'https://via.placeholder.com/150';
        el.style.width = props.width || '150px';
        el.style.height = props.height || '150px';
      } else if (type === 'button') {
        el = document.createElement('button');
        el.innerText = props.content || 'Click Me';
      }

      el.classList.add('element');
      el.style.position = 'relative';
      el.style.color = props.color || '#000';
      el.style.backgroundColor = props.background || 'transparent';

      el.addEventListener('click', () => {
        selectedElement = el;
        loadProperties(el);
      });

      const del = document.createElement('button');
      del.innerText = '×';
      del.className = 'delete-btn';
      del.onclick = () => {
        canvas.removeChild(wrapper);
        saveCanvasState();
      };

      wrapper.appendChild(el);
      wrapper.appendChild(del);
      canvas.appendChild(wrapper);
    }

    function loadProperties(el) {
      if (el.tagName === 'IMG') {
        form.propContent.value = el.src;
        form.propWidth.value = parseInt(el.style.width) || '';
        form.propHeight.value = parseInt(el.style.height) || '';
      } else {
        form.propContent.value = el.innerText || '';
        form.propWidth.value = '';
        form.propHeight.value = '';
      }

      form.propFontSize.value = parseInt(window.getComputedStyle(el).fontSize) || '';
      form.propColor.value = rgbToHex(window.getComputedStyle(el).color);
      form.propBackground.value = rgbToHex(window.getComputedStyle(el).backgroundColor);
    }

    form.addEventListener('input', () => {
      if (!selectedElement) return;

      const fontSize = form.propFontSize.value + 'px';
      const color = form.propColor.value;
      const background = form.propBackground.value;
      const content = form.propContent.value;

      selectedElement.style.fontSize = fontSize;
      selectedElement.style.color = color;
      selectedElement.style.backgroundColor = background;

      if (selectedElement.tagName === 'IMG') {
        selectedElement.src = content;
        if (form.propWidth.value) {
          selectedElement.style.width = form.propWidth.value + 'px';
        }
        if (form.propHeight.value) {
          selectedElement.style.height = form.propHeight.value + 'px';
        }
      } else {
        selectedElement.innerText = content;
      }

      saveCanvasState();
    });

    function rgbToHex(rgb) {
      const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(rgb);
      return result ? "#" + result.slice(1).map(x => {
        const hex = parseInt(x).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }).join('') : '#000000';
    }

    function saveCanvasState() {
      const elements = [];
      canvas.querySelectorAll('.wrapper').forEach(wrapper => {
        const el = wrapper.querySelector('.element');

        const elementData = {
          type: el.tagName.toLowerCase() === 'img' ? 'image' :
                el.tagName.toLowerCase() === 'button' ? 'button' : 'text',
          x: parseFloat(wrapper.style.left),
          y: parseFloat(wrapper.style.top),
          content: el.innerText || '',
          src: el.src || '',
          width: el.style.width || '',
          height: el.style.height || '',
          fontSize: el.style.fontSize || '',
          color: el.style.color || '',
          background: el.style.backgroundColor || ''
        };
        elements.push(elementData);
      });

      localStorage.setItem('canvasElements', JSON.stringify(elements));
    }

    function loadCanvasState() {
      const saved = localStorage.getItem('canvasElements');
      if (!saved) return;

      const elements = JSON.parse(saved);
      elements.forEach(el => {
        createElement(el.type, el.x, el.y, el);
      });
    }

    function clearCanvas() {
      canvas.innerHTML = '';
      localStorage.removeItem('canvasElements');
    }

    // Load saved state on page load
    window.onload = loadCanvasState;