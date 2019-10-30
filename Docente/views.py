from django.shortcuts import render

# Create your views here.
from Docente.models import Docente
from Estudiante.models import Estudiante
from .models import Docente
from .serializers import DocenteSerializer
from rest_framework import generics


class listadoDocentes(generics.ListCreateAPIView):
    queryset = Docente.objects.all()
    serializer_class = DocenteSerializer
