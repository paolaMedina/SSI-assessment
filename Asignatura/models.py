from django.db import models
from Docente.models import Docente
from Estudiante.models import Estudiante

# Create your models here.


class Asignatura (models.Model):
    nombre = models.CharField(max_length=100)
    codigo = models.CharField(max_length=100)
    docente = models.ForeignKey(Docente, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


class Matricula (models.Model):
    estudiante = models.ForeignKey(Estudiante, on_delete=models.CASCADE)
    asignatura = models.ForeignKey(Asignatura, on_delete=models.CASCADE)
    calificacion = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
