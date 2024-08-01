const UserInput = document.getElementById('user-input');
const CheckButton = document.getElementById('check-btn');
const ClearButton = document.getElementById('clear-btn');
const ResultsBox = document.getElementById('results-div');

const CheckValidity = userInput => {
  if (userInput === '') {
    alert('Please provide a phone number');
    return;
  }
  const CountryCode = '^(1\\s?)?';
  const AreaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const Spaces = '[\\s\\-]?';
  const Number = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const CompleteNumber = new RegExp(
    `${CountryCode}${AreaCode}${Spaces}${Number}`
  );

  const IsValid = document.createElement('p');
  IsValid.appendChild(
    document.createTextNode(
      `${CompleteNumber.test(userInput) ? 'Valid' : 'Invalid'} US number: ${userInput}`
    )
  );
  ResultsBox.appendChild(IsValid);
};

CheckButton.addEventListener('click', () => {
  CheckValidity(UserInput.value);
  UserInput.value = '';
});

UserInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    CheckValidity(UserInput.value);
    UserInput.value = '';
  }
});

ClearButton.addEventListener('click', () => {
  ResultsBox.textContent = '';
});
