var percentCircle1;
var percentCircle2;
var percentCircle3;

var percentLine1;
var percentLine2;
var percentLine3;
var percentLine4;
var percentLine5;
var percentLine6;

fetch('./assets/data.json')
  .then(response => {
    return response.json();
  })
  .then(json => {
    var infobarLanguages = Object.keys(json).map(e => json[e].infobar[0].languages);
    infobarLanguages.forEach(function (obj) {
      percentCircle1 =
        obj.filter(function (el) {
          return el.id === 'circleprog1';
        })[0].percent / 100;

      percentCircle2 =
        obj.filter(function (el) {
          return el.id === 'circleprog2';
        })[0].percent / 100;

      percentCircle3 =
        obj.filter(function (el) {
          return el.id === 'circleprog3';
        })[0].percent / 100;
    });
    progressCircle1();
    progressCircle2();
    progressCircle3();

    var infobarSkills = Object.keys(json).map(e => json[e].infobar[0].skills);
    infobarSkills.forEach(function (obj) {
      percentLine1 =
        obj.filter(function (el) {
          return el.id === 'lineprog1';
        })[0].percent / 100;

      percentLine2 =
        obj.filter(function (el) {
          return el.id === 'lineprog2';
        })[0].percent / 100;

      percentLine3 =
        obj.filter(function (el) {
          return el.id === 'lineprog3';
        })[0].percent / 100;

      percentLine4 =
        obj.filter(function (el) {
          return el.id === 'lineprog4';
        })[0].percent / 100;

      percentLine5 =
        obj.filter(function (el) {
          return el.id === 'lineprog5';
        })[0].percent / 100;

      percentLine6 =
        obj.filter(function (el) {
          return el.id === 'lineprog6';
        })[0].percent / 100;
    });
    progressLineprog1();
    progressLineprog2();
    progressLineprog3();
    progressLineprog4();
    progressLineprog5();
    progressLineprog6();
  });

function progressCircle1() {
  var bar = new ProgressBar.Circle(circleprog1, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 500,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    },
  });
  bar.animate(percentCircle1);
}

function progressCircle2() {
  var bar = new ProgressBar.Circle(circleprog2, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 600,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    },
  });
  bar.animate(percentCircle2);
}

function progressCircle3() {
  var bar = new ProgressBar.Circle(circleprog3, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 700,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    },
  });
  bar.animate(percentCircle3);
}

function progressLineprog1() {
  var bar = new ProgressBar.Line(lineprog1, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 800,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%',
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    },
  });
  bar.animate(percentLine1);
}

function progressLineprog2() {
  var bar = new ProgressBar.Line(lineprog2, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 900,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%',
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    },
  });
  bar.animate(percentLine2);
}

function progressLineprog3() {
  var bar = new ProgressBar.Line(lineprog3, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 1000,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%',
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    },
  });
  bar.animate(percentLine3);
}

function progressLineprog4() {
  var bar = new ProgressBar.Line(lineprog4, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 1100,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%',
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    },
  });
  bar.animate(percentLine4);
}

function progressLineprog5() {
  var bar = new ProgressBar.Line(lineprog5, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 1200,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%',
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    },
  });
  bar.animate(percentLine5);
}

function progressLineprog6() {
  var bar = new ProgressBar.Line(lineprog6, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 1200,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%',
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    },
  });
  bar.animate(percentLine6);
}
