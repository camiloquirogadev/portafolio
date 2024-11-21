INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',  
    'django.contrib.redirects',  
    'rest_framework',
    'corsheaders',  # Agregamos aquí directamente CORS
    'portfolio_backend',  # Asegúrate de que este sea tu app
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'corsheaders.middleware.CorsMiddleware',  # Asegúrate de que esto esté al inicio
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware', 
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.gzip.GZipMiddleware',
    'django.middleware.transaction.TransactionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.staticfiles.middleware.StaticFilesMiddleware',
    'django.contrib.redirects.middleware.RedirectFallbackMiddleware',
]

CORS_ALLOWED_ORIGINS = [
    'https://quirogacamilo.netlify.app',
]

# Configuración para producción: ¡Cambia esto cuando subas tu sitio en Netlify!
ALLOWED_HOSTS = ['localhost', '127.0.0.1', 'https://quirogacamilo.netlify.app']
DEBUG = False  # Cambia a False para producción

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [], 
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
from pathlib import Path

# BASE_DIR es el directorio raíz de tu proyecto
BASE_DIR = Path(__file__).resolve().parent.parent

# Static files (estáticos como imágenes, CSS y JS)
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'  # Asegúrate de agregar este directorio al deploy

# CORS y configuración adicional
CSRF_TRUSTED_ORIGINS = [
    'https://quirogacamilo.netlify.app',
]

