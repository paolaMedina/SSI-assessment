from django.db import models
from Docente.models import Docente
from Estudiante.models import Estudiante

# Create your models here.


class Asignatura (models.Model):
    nombre = models.CharField(max_length=100)
    codigo = models.CharField(max_length=100)
    docente = models.ForeignKey(Docente, on_delete=models.CASCADE)
    estudiante = models.ManyToManyField(Estudiante)
    created_at = models.DateTimeField(auto_now_add=True)
