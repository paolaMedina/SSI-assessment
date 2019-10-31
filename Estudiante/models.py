from django.db import models

# Create your models here.


class Estudiante (models.Model):
    nombre = models.CharField(max_length=100)
    identificacion = models.PositiveIntegerField()
    pin = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
