
from django.urls import path
from . import views
urlpatterns = [
    path('api/docentes/', views.listadoDocentes.as_view()),
]
