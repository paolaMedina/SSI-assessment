from django.shortcuts import render

# Create your views here.
from Docente.models import Docente
from Estudiante.models import Estudiante
from .models import Docente
from .serializers import DocenteSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


class listadoDocentes(generics.ListCreateAPIView):
    queryset = Docente.objects.all()
    serializer_class = DocenteSerializer


class PollDetail(APIView):
    def get(self, request, pk):
        docente = get_object_or_404(Docente, pk=pk)
        data = DocenteSerializer(docente).data
        return Response(data)
