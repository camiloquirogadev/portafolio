from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('contact.urls')),  # Incluir la ruta de la API de contacto
]
