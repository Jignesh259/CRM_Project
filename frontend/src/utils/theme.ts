export const applyUserTheme = (email?: string) => {
  const activeEmail = email || localStorage.getItem('cs_current_user_email') || 'default';
  const key = `cs_system_settings_${activeEmail}`;
  const dataStr = localStorage.getItem(key) || localStorage.getItem('cs_system_settings');
  if (dataStr) {
    try {
      const settings = JSON.parse(dataStr);
      const theme = settings.theme || {};
      const mode = theme.mode || 'light';
      const primaryColor = theme.primaryColor || '#1976D2';
      
      // Apply theme mode class to documentElement
      if (mode === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else if (mode === 'light') {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      } else {
        // System preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.add('light');
          document.documentElement.classList.remove('dark');
        }
      }

      // Apply primary color CSS variable
      document.documentElement.style.setProperty('--primary-color', primaryColor);
      
      // Apply density class
      const density = theme.density || 'comfortable';
      if (density === 'compact') {
        document.documentElement.classList.add('density-compact');
        document.documentElement.classList.remove('density-comfortable');
      } else {
        document.documentElement.classList.add('density-comfortable');
        document.documentElement.classList.remove('density-compact');
      }

      // Apply font size scale attribute
      const fontSize = theme.fontSize || 'medium';
      document.documentElement.setAttribute('data-font-size', fontSize);
    } catch (e) {
      console.error('Error applying theme settings:', e);
    }
  } else {
    // If no settings found, apply sensible defaults
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    document.documentElement.style.setProperty('--primary-color', '#1976D2');
    document.documentElement.classList.add('density-comfortable');
    document.documentElement.classList.remove('density-compact');
    document.documentElement.setAttribute('data-font-size', 'medium');
  }
};
