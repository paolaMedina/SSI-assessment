from django.db import models

# Create your models here.


class Docente (models.Model):
    nombre = models.CharField(max_length=100)
    identificacion = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
