(function () {
  var WHATSAPP_NUMBER = '5492612064531';

  function buildWhatsAppLink(productName) {
    var message = 'Hola! Quiero consultar por ' + productName;
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
  }

  var PRODUCTS = [
    { name: 'Camionero Algarrobo', category: 'Mates', img: 'camionero-algarrobo.png', alt: 'Mate Camionero de algarrobo barnizado con virola de acero inoxidable', aptoGrabado: true, detalles: ['Barnizado/Natural', 'Virola de acero inoxidable'], colores: [{ name: 'Marrón madera natural', hex: '#8B5A2B' }] },
    { name: 'Camionero Calabaza', category: 'Mates', img: 'camionero-calabaza.png', alt: 'Mate Camionero de calabaza con virola de acero inoxidable', aptoGrabado: true, detalles: ['Virola de acero inoxidable'], colores: [{ name: 'Marrón', hex: '#4A2E1E' }, { name: 'Negro', hex: '#1A1A1A' }] },
    { name: 'Mate Ranchero/Mü', category: 'Mates', img: 'ranchero-mu.png', alt: 'Mate Ranchero Mü con clavos de alpaca', aptoGrabado: false, detalles: ['Clavos de alpaca (colores: blanco, negro)'], colores: [{ name: 'Blanco', hex: '#F5F0E6' }, { name: 'Negro', hex: '#1A1A1A' }] },
    { name: 'Torpedo Algarrobo', category: 'Mates', img: 'torpedo-algarrobo.png', alt: 'Mate Torpedo de algarrobo con virola de acero', aptoGrabado: false, detalles: ['Virola de acero'], colores: [{ name: 'Marrón madera natural', hex: '#8B5A2B' }] },
    { name: 'Torpedo Premium de Cuero Repujado', category: 'Mates', img: 'torpedo-premium-cuero-repujado.png', alt: 'Mate Torpedo Premium de cuero repujado con virola de alpaca tallada', aptoGrabado: false, detalles: ['Virola de alpaca tallada', 'Base de bolitas (colores: rojo, negro)'], colores: [{ name: 'Rojo/Bordó', hex: '#7A1F1F' }, { name: 'Negro', hex: '#1A1A1A' }] },
    { name: 'Torpedo Premium', category: 'Mates', img: 'torpedo-premium.png', alt: 'Mate Torpedo Premium con virola de alpaca tallada y base de bolitas', aptoGrabado: false, detalles: ['Virola de alpaca tallada', 'Base de bolitas'], colores: [{ name: 'Negro', hex: '#1A1A1A' }] },
    { name: 'Torpedo Cincelado', category: 'Mates', img: 'torpedo-cincelado.png', alt: 'Mate Torpedo Cincelado con virola de alpaca tallada', aptoGrabado: false, detalles: ['Virola de alpaca tallada'], colores: [{ name: 'Negro', hex: '#1A1A1A' }] },
    { name: 'Imperial Cincelado', category: 'Mates', img: 'imperial-cincelado.png', alt: 'Mate Imperial Cincelado con virola de alpaca tallada', aptoGrabado: false, detalles: ['Virola de alpaca tallada (colores: marrón, negro)'], colores: [{ name: 'Negro', hex: '#1A1A1A' }] },
    { name: 'Imperial Deluxe', category: 'Mates', img: 'imperial-deluxe.png', alt: 'Mate Imperial Deluxe con interior de acero inoxidable y virola de alpaca', aptoGrabado: true, detalles: ['Interior de acero', 'Virola de alpaca (colores: marrón, negro)'], colores: [{ name: 'Marrón', hex: '#4A2E1E' }, { name: 'Negro', hex: '#1A1A1A' }] },
    { name: 'Imperial Algarrobo', category: 'Mates', img: 'imperial-algarrobo.png', alt: 'Mate Imperial de algarrobo con virola de acero', aptoGrabado: true, detalles: ['Virola de acero'], colores: [{ name: 'Marrón madera natural', hex: '#8B5A2B' }] },
    { name: 'Imperial Calabaza', category: 'Mates', img: 'imperial-calabaza.png', alt: 'Mate Imperial de calabaza con virola de alpaca', aptoGrabado: true, detalles: ['Virola de alpaca (colores: personalizable, marrón, negro)'], colores: [{ name: 'Marrón', hex: '#4A2E1E' }, { name: 'Negro', hex: '#1A1A1A' }] },
    { name: 'Imperial Premium', category: 'Mates', img: 'imperial-premium.png', alt: 'Mate Imperial Premium con base de bolitas y virola de alpaca tallada', aptoGrabado: true, detalles: ['Base con bolitas', 'Virola de alpaca (colores: marrón, negro)'], colores: [{ name: 'Marrón', hex: '#4A2E1E' }, { name: 'Negro', hex: '#1A1A1A' }] },

    { name: 'Canasta Matera — Modelo 1', category: 'Materas y otros accesorios', img: 'porta-mate-cuero-1.png', alt: 'Canasta matera de eco-cuero con panel frontal entrelazado tipo rueda', aptoGrabado: false, detalles: ['De eco-cuero o cuero premium'], colores: [{ name: 'Marrón', hex: '#4A2E1E' }, { name: 'Blanco', hex: '#F5F0E6' }] },
    { name: 'Canasta Matera — Modelo 2', category: 'Materas y otros accesorios', img: 'porta-mate-cuero-2.png', alt: 'Canasta matera de eco-cuero con panel frontal liso', aptoGrabado: false, detalles: ['De eco-cuero o cuero premium'], colores: [{ name: 'Marrón', hex: '#4A2E1E' }, { name: 'Blanco', hex: '#F5F0E6' }] },
    { name: 'Canasta Matera — Modelo 3', category: 'Materas y otros accesorios', img: 'porta-mate-cuero-3.png', alt: 'Canasta matera de eco-cuero con virola decorativa', aptoGrabado: false, detalles: ['De eco-cuero o cuero premium'], colores: [{ name: 'Marrón', hex: '#4A2E1E' }, { name: 'Blanco', hex: '#F5F0E6' }] },
    { name: 'Porta Mate de Eco-Cuero', category: 'Materas y otros accesorios', img: 'porta-mate-cuero-4.png', alt: 'Porta mate de eco-cuero con compartimento cilíndrico adicional y tapa metálica', aptoGrabado: false, detalles: ['De eco-cuero', 'Compartimento cilíndrico adicional para accesorios (yerba/mate chico) con tapa metálica'], colores: [{ name: 'Blanco', hex: '#F5F0E6' }, { name: 'Marrón', hex: '#4A2E1E' }, { name: 'Tostado/Camel', hex: '#C08B4A' }] },
    { name: 'Vaso de Aluminio', category: 'Materas y otros accesorios', img: 'vaso-aluminio.png', alt: 'Vaso de aluminio de 1 litro en negro, blanco o personalizado', aptoGrabado: true, detalles: ['Capacidad 1 litro', 'Colores: negro, blanco, personalizable'], colores: [{ name: 'Negro', hex: '#1A1A1A' }, { name: 'Blanco', hex: '#F5F0E6' }] },
    { name: 'Almohadón Matero', category: 'Materas y otros accesorios', img: 'almohadon-matero.png', alt: 'Almohadón matero con espacios para yerba, mate y termo', aptoGrabado: false, detalles: ['3 espacios: yerba, mate y termo'], colores: [{ name: 'Negro aterciopelado', hex: '#1A1A1A' }] },
    { name: 'Tapamate', category: 'Materas y otros accesorios', img: 'tapamate.png', alt: 'Tapamate universal de silicona personalizable', aptoGrabado: false, detalles: ['Tapa universal de silicona', 'Personalizable'], colores: [{ name: 'Celeste/Azul silicona', hex: '#7FB8C4' }] },
    { name: 'Cuchillos', category: 'Materas y otros accesorios', img: 'cuchillos.png', alt: 'Cuchillos materos con fundas de cuero', aptoGrabado: true, detalles: ['Con fundas de cuero', 'Variedad de modelos — consultar stock disponible'], colores: [{ name: 'Marrón cuero', hex: '#8B5A2B' }] },

    { name: 'Bombilla Pico de Loro', category: 'Bombillas', img: 'bombilla-pico-de-loro.png', alt: 'Bombilla Pico de Loro', aptoGrabado: false, detalles: [], colores: [{ name: 'Acero/Plateado', hex: '#B8BCC0' }] },
    { name: 'Bombilla Chata', category: 'Bombillas', img: 'bombilla-chata.png', alt: 'Bombilla Chata de acero inoxidable con virola de alpaca', aptoGrabado: false, detalles: ['Acero inoxidable', 'Virola de alpaca'], colores: [{ name: 'Acero/Plateado', hex: '#B8BCC0' }] },
    { name: 'Bombillón de Alpaca', category: 'Bombillas', img: 'bombillon-alpaca-1.png', alt: 'Bombillón de alpaca con detalles en bronce', aptoGrabado: false, detalles: ['Detalles en bronce'], colores: [{ name: 'Acero/Plateado', hex: '#B8BCC0' }] },
    { name: 'Bombillón Bañado', category: 'Bombillas', img: 'bombillon-banado-alpaca-bronce.png', alt: 'Bombillón bañado en alpaca y bronce', aptoGrabado: false, detalles: ['En alpaca y bronce'], colores: [{ name: 'Acero/Plateado', hex: '#B8BCC0' }] },
    { name: 'Bombillón Masiso', category: 'Bombillas', img: 'bombillon-masiso-alpaca.png', alt: 'Bombillón masiso 100% alpaca', aptoGrabado: false, detalles: ['100% alpaca'], colores: [{ name: 'Acero/Plateado', hex: '#B8BCC0' }] },
    { name: 'Bombillón Pico de Loro', category: 'Bombillas', img: 'bombillon-pico-de-loro-alpaca-1.png', alt: 'Bombillón Pico de Loro 100% alpaca con detalles en bronce', aptoGrabado: false, detalles: ['100% alpaca', 'Detalles en bronce'], colores: [{ name: 'Acero/Plateado', hex: '#B8BCC0' }] },

    { name: 'Termo Media Manija', category: 'Termos', img: 'termo-media-manija.png', alt: 'Termo Media Manija de acero inoxidable, disponible en negro y blanco', aptoGrabado: true, detalles: ['Acero inoxidable', 'Colores: negro, blanco'], colores: [{ name: 'Acero Natural', hex: '#B8BCC0' }, { name: 'Acero Negro', hex: '#1A1A1A' }] },

    { name: 'Yerba Canarias', category: 'Yerbas', img: 'yerba-canarias.png', alt: 'Yerba Canarias 1kg, variantes Serena y Tradicional', aptoGrabado: false, detalles: ['Variantes Serena (verde) y Tradicional (amarilla)', '1kg'], colores: [{ name: 'Amarillo', hex: '#F6D610' }] },
    { name: 'Yerba Rei Verde', category: 'Yerbas', img: 'yerba-reiverde-1.png', alt: 'Yerba Rei Verde 1kg, variantes Clássica, Premium y Tradicional', aptoGrabado: false, detalles: ['Variantes Clássica, Premium, Tradicional', '1kg (formato uruguayo/exportación)'], colores: [{ name: 'Blanco', hex: '#F5F0E6' }] },

    { name: 'Combo Matera', category: 'Promos', isCombo: true, comboIcons: ['matera', 'mate', 'bombilla', 'termo'], aptoGrabado: false },
    { name: 'Combo Almohadón', category: 'Promos', isCombo: true, comboIcons: ['almohadon', 'mate', 'bombilla', 'termo'], aptoGrabado: false }
  ];

  // Fallback: íconos de línea usados si algún componente del combo no tiene foto cargada en productos.md.
  var COMBO_ICON_SVGS = {
    matera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8V6a4 4 0 0 1 8 0v2"/><path d="M6 8h12l-1.5 12h-9L6 8Z"/></svg>',
    almohadon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><line x1="9" y1="5" x2="9" y2="19"/><line x1="15" y1="5" x2="15" y2="19"/></svg>',
    bombilla: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="3.5" r="1.5"/><line x1="11.3" y1="5" x2="7.7" y2="18.5"/><circle cx="7" cy="20" r="2"/></svg>',
    termo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2.5" width="4" height="3" rx="1"/><path d="M6 8h8v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z"/><line x1="6" y1="12.5" x2="14" y2="12.5"/></svg>',
    mate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 9c0-2 1-4 4-4s4 1.5 4 3-1.5 2.5-2 4"/><path d="M6 9h9a3 3 0 0 1 3 3v1a7 7 0 0 1-7 7H9a7 7 0 0 1-6-10z"/><line x1="13" y1="6" x2="17" y2="4"/></svg>'
  };

  // Foto real de cada componente, tomada de la columna "Foto" de productos.md.
  // photo: null si el producto todavía no tiene foto cargada -> se usa el ícono SVG de COMBO_ICON_SVGS como fallback.
  var COMBO_COMPONENTS = {
    matera: { folder: 'materas-accesorios', file: 'porta-mate-cuero-1.png', alt: 'Matera / porta mate de eco-cuero' },
    almohadon: { folder: 'materas-accesorios', file: 'almohadon-matero.png', alt: 'Almohadón matero' },
    bombilla: { folder: 'bombillas', file: 'bombilla-pico-de-loro.png', alt: 'Bombilla Pico de Loro' },
    termo: { folder: 'termos', file: 'termo-media-manija.png', alt: 'Termo Media Manija' },
    mate: { folder: 'mates', file: 'camionero-algarrobo.png', alt: 'Mate Camionero Algarrobo' }
  };

  var CATEGORY_FOLDERS = {
    'Mates': 'mates',
    'Materas y otros accesorios': 'materas-accesorios',
    'Bombillas': 'bombillas',
    'Termos': 'termos',
    'Yerbas': 'yerbas'
  };

  var CATEGORIES = ['Promos', 'Mates', 'Materas y otros accesorios', 'Bombillas', 'Termos', 'Yerbas'];

  var searchInput = document.getElementById('catalog-search-input');
  var filtersEl = document.getElementById('catalog-filters');
  var gridEl = document.getElementById('catalog-grid');

  if (!searchInput || !filtersEl || !gridEl) return;

  var activeCategory = 'Todos';

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function renderFilters() {
    var pills = ['Todos'].concat(CATEGORIES);
    filtersEl.innerHTML = pills.map(function (category) {
      var isActive = category === activeCategory;
      return '<button type="button" class="catalog-filter-pill' + (isActive ? ' is-active' : '') +
        '" data-category="' + escapeHtml(category) + '" aria-pressed="' + isActive + '">' +
        escapeHtml(category) + '</button>';
    }).join('');
  }

  function renderProducts() {
    var query = searchInput.value.trim().toLowerCase();

    var filtered = PRODUCTS.filter(function (product) {
      var matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
      var matchesQuery = product.name.toLowerCase().indexOf(query) !== -1;
      return matchesCategory && matchesQuery;
    });

    if (filtered.length === 0) {
      gridEl.innerHTML = '<p class="catalog-empty">No encontramos productos con ese nombre. Probá con otra búsqueda.</p>';
      return;
    }

    gridEl.innerHTML = filtered.map(function (product) {
      var badge = product.aptoGrabado
        ? '<span class="product-card__badge">Apto para grabado</span>'
        : '';
      var whatsappHref = buildWhatsAppLink(product.name);
      var media = product.isCombo ? renderComboMedia(product) : renderPhotoMedia(product);
      var details = (product.detalles && product.detalles.length)
        ? '<p class="product-card__details">' + escapeHtml(product.detalles.join(' · ')) + '</p>'
        : '';
      var colors = renderColorSwatches(product);

      return '' +
        '<article class="product-card">' +
        '<div class="product-card__media">' +
        media +
        badge +
        '</div>' +
        '<h3 class="product-card__title">' + escapeHtml(product.name) + '</h3>' +
        details +
        colors +
        '<span class="product-card__price">Consultar precio</span>' +
        '<a class="btn btn--whatsapp" href="' + whatsappHref + '" target="_blank" rel="noopener">Comprar por WhatsApp</a>' +
        '</article>';
    }).join('');
  }

  function renderColorSwatches(product) {
    if (!product.colores || !product.colores.length) return '';

    var dots = product.colores.map(function (color) {
      return '<span class="product-card__swatch" style="background-color: ' + color.hex + ';" title="' + escapeHtml(color.name) + '"></span>';
    }).join('');

    return '' +
      '<div class="product-card__colors">' +
      '<span class="product-card__colors-label">Colores disponibles:</span>' +
      '<span class="product-card__swatches">' + dots + '</span>' +
      '</div>';
  }

  function renderPhotoMedia(product) {
    var folder = CATEGORY_FOLDERS[product.category];
    var src = 'assets/img/' + folder + '/' + product.img;
    return '<img src="' + src + '" alt="' + escapeHtml(product.alt) + '" loading="lazy">';
  }

  function renderComboMedia(product) {
    var quadrants = product.comboIcons.map(function (key) {
      var component = COMBO_COMPONENTS[key];
      var content = component
        ? '<img src="assets/img/' + component.folder + '/' + component.file + '" alt="' + escapeHtml(component.alt) + '" loading="lazy">'
        : COMBO_ICON_SVGS[key];
      return '<span class="combo-collage__icon">' + content + '</span>';
    }).join('');

    // Cuando haya foto real del combo completo (las 4 piezas juntas en una sola toma),
    // reemplazar este bloque .combo-collage por:
    // <img src="assets/img/combos/[slug-del-combo].jpg" alt="[nombre del combo]" loading="lazy">
    return '<div class="combo-collage"><div class="combo-collage__grid">' + quadrants + '</div></div>';
  }

  filtersEl.addEventListener('click', function (event) {
    var pill = event.target.closest('.catalog-filter-pill');
    if (!pill) return;
    activeCategory = pill.getAttribute('data-category');
    renderFilters();
    renderProducts();
  });

  searchInput.addEventListener('input', renderProducts);

  renderFilters();
  renderProducts();
})();
