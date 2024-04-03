const calculateComplexity = function (password) {
  let complexity = 0;
  
  const regExps = [ 
    /[a-z]/,
    /[A-Z]/,
    /[0-9]/,
    /.{8}/,
    /.{16}/,
    /[!-//:-@[-`{-ÿ]/
  ];
  
  regExps.forEach(function (regexp) {
    if (regexp.test(password)) {
      complexity++;
    }
  });
  
  return {
    value: complexity,
    max: regExps.length
  };
};
 
const checkPasswordStregth = function (password) {
  const progress = document.querySelector('#passwordComplexity'),
      complexity = calculateComplexity(this.value); 
  
  progress.value = complexity.value;
  progress.max = complexity.max;
};

const input = document.querySelector('#passwordField');
input.addEventListener('keyup', checkPasswordStregth);