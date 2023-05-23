const path = require('path');

function adjustConfig(config) {
  const currentFolder = process.env.INIT_CWD;
  
  // Lógica para ajustar la configuración según la carpeta actual
  if (currentFolder.includes('en')) {
    config.site.title = 'English Documentation';
    config.site.language = 'en';
  } else if (currentFolder.includes('es')) {
    config.site.title = 'Documentación en Español';
    config.site.language = 'es';
  } else if (currentFolder.includes('fr')) {
    config.site.title = 'Documentation en Français';
    config.site.language = 'fr';
  }

  return config;
}

module.exports = (config) => {
  return adjustConfig(config);
};