// Tomado de: https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del

// Refresca el token si el inicio de sesión fue con la cuenta de Google

const RefreshTokenSetup = res => {

  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    localStorage.setItem('useAuthGoogleToken', newAuthRes.id_token);

    setTimeout(refreshToken, refreshTiming);
  };

  setTimeout(refreshToken, refreshTiming);
};

export default RefreshTokenSetup