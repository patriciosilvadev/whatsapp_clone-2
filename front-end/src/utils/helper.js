export const getLocalStorage = (name) => {
  const local = localStorage.getItem(name);

  if (!local) {
    return null;
  } else {
    return local;
  }
};

export const authHeader = () => {
  const tokenLocal = getLocalStorage('token');

  if (tokenLocal) {
    return {
      Authorization: `Bearer ${tokenLocal}`,
    };
  } else {
    // console.log('ubah nanti'); // dirubah kalo sdh ada route
  }
};

export const isBigLaptopSize = typeof window !== 'undefined' && (window.screen.width >= 1600 && window.screen.width <= 1700);

export const isLaptopSize = typeof window !== 'undefined' && (window.screen.width >= 1200 && window.screen.width <= 1599);

export const isMobileSize = typeof window !== 'undefined' && (window.screen.width >= 320 && window.screen.width <= 480);

export const isTabletSize = typeof window !== 'undefined' && (window.screen.width >= 1024 && window.screen.width <= 768);

