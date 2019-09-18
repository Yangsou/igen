export function AccountHttpService(options) {
  const baseUrl = 'https://vsn.edu.vn/api/registry-igen';
  // const baseUrl = 'http://localhost:8008/api/registry-igen';

  function registerAccount(form) {
    return options.httpService.post(baseUrl, form)
  }

  return {
    registerAccount
  }
}