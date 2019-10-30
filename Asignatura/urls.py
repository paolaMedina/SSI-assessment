from django.urls import path
from . import views
urlpatterns = [
    path('api/asignatura/', views.listado.as_view()),
]
