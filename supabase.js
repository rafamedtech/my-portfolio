const { createClient } = supabase;

const supabase = createClient(
  'https://atvjxufozpfeqjlzwznr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjU4ODMwMywiZXhwIjoxOTUyMTY0MzAzfQ.2ZRCh748peT1TNrI_P_at51gncwrdQHwvzitKh05f0s'
);

const form = document.querySelector('#contact-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formInputs = form.querySelectorAll('input, textarea');

  let submision = {};

  formInputs.forEach((element) => {
    const { value, name } = element;
    if (value) {
      submision[name] = value;
    }
  });

  console.log(submision);
});
