(function() {
  var filter, hide, showFirst,
    __slice = [].slice;

  showFirst = function() {
    var el, els, found, _i, _len, _results;
    els = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    found = false;
    _results = [];
    for (_i = 0, _len = els.length; _i < _len; _i++) {
      el = els[_i];
      if (el && !found) {
        found = true;
        _results.push(el.style.display = 'block');
      } else if (el) {
        _results.push(el.style.display = 'none');
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  hide = function() {
    var el, els, _i, _len, _results;
    els = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    _results = [];
    for (_i = 0, _len = els.length; _i < _len; _i++) {
      el = els[_i];
      if (el) {
        _results.push(el.style.display = 'none');
      }
    }
    return _results;
  };

  filter = function(term) {
    var allEmpty, comp, comparisons, empty, section, visibleIndex, _i, _j, _len, _len1, _ref, _ref1;
    visibleIndex = 0;
    allEmpty = true;
    _ref = document.querySelectorAll('section');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      section = _ref[_i];
      empty = true;
      _ref1 = section.querySelectorAll('.comparison');
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        comp = _ref1[_j];
        if (!term || comp.textContent.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
          empty = false;
          comp.classList.remove('hidden');
        } else {
          comp.classList.add('hidden');
        }
      }
      if (empty) {
        section.classList.add('hidden');
      } else {
        allEmpty = false;
        section.classList.remove('hidden');
        if (++visibleIndex % 2) {
          section.classList.add('odd');
        } else {
          section.classList.remove('odd');
        }
      }
    }
    comparisons = document.querySelector('.comparisons');
    if (allEmpty) {
      return comparisons.classList.add('empty');
    } else {
      return comparisons.classList.remove('empty');
    }
  };

}).call(this);
