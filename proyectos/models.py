from django.contrib.auth.models import User
from django.db import models
from model_utils.models import TimeStampedModel
from clientes.models import ClienteBiable
from cotizaciones.models import Cotizacion


class Proyecto(models.Model):
    cotizacion = models.OneToOneField(Cotizacion, on_delete=models.SET_NULL, related_name='mi_proyecto', null=True,
                                      blank=True)
    id_proyecto = models.CharField(max_length=15, unique=True)
    fecha_prometida = models.DateField(null=True, blank=True)
    abierto = models.BooleanField(default=True)
    costo_materiales = models.DecimalField(decimal_places=2, max_digits=12, default=0)
    en_cguno = models.BooleanField(default=True)
    nombre = models.CharField(max_length=200, null=True, blank=True)
    cliente = models.ForeignKey(ClienteBiable, on_delete=models.PROTECT, null=True, blank=True)

    def __str__(self):
        return self.id_proyecto

    class Meta:
        verbose_name = 'Proyecto'
        verbose_name_plural = 'Proyectos'
        permissions = [
            ("list_proyecto", "Can see list proyectos"),
            ("detail_proyecto", "Can see detail proyecto"),
            ("valor_proyecto", "Ver valor proyecto"),
            ("costo_proyecto", "Ver costo proyecto"),
            ("costo_mano_obra_proyecto", "Ver costo MO proyecto"),
            ("costo_materiales_proyecto", "Ver costo materiales proyecto"),
            ("costo_presupuestado_proyecto", "Ver costo presupuestado proyecto"),
            ("admon_proyecto_project_manager", "Administrador Project Manager"),
            ("detail_proyecto_project_manager", "Ver Project Manager"),
        ]


class Literal(models.Model):
    id_literal = models.CharField(max_length=15, unique=True)
    cotizacion = models.OneToOneField(Cotizacion, on_delete=models.SET_NULL, related_name='mi_literal', null=True,
                                      blank=True)
    proyecto = models.ForeignKey(Proyecto, related_name='mis_literales', on_delete=models.CASCADE)
    descripcion = models.CharField(max_length=300, null=True, blank=True)
    costo_materiales = models.DecimalField(decimal_places=2, max_digits=12, default=0, null=True, blank=True)
    en_cguno = models.BooleanField(default=True)
    abierto = models.BooleanField(default=True)
    miembros = models.ManyToManyField(User, through='MiembroLiteral', related_name='literales')

    def __str__(self):
        return self.id_literal


class MiembroLiteral(models.Model):
    literal = models.ForeignKey(Literal, on_delete=models.PROTECT, related_name='mis_miembros')
    usuario = models.ForeignKey(User, on_delete=models.PROTECT, related_name='mis_literales')
    puede_editar_tareas = models.BooleanField(default=False)
    puede_eliminar_tareas = models.BooleanField(default=False)
    puede_adicionar_tareas = models.BooleanField(default=False)
    puede_administrar_fases = models.BooleanField(default=False)
    puede_administrar_miembros = models.BooleanField(default=False)


class ArchivoProyecto(TimeStampedModel):
    def archivo_upload_to(instance, filename):
        nro_proyecto = instance.proyecto.id_proyecto
        return "documentos/proyectos/%s/%s" % (nro_proyecto, filename)

    nombre_archivo = models.CharField(max_length=300)
    archivo = models.FileField(null=True, upload_to=archivo_upload_to)
    proyecto = models.ForeignKey(Proyecto, related_name='mis_documentos', on_delete=models.PROTECT)
    creado_por = models.ForeignKey(User, on_delete=models.PROTECT, blank=True, null=True)

    class Meta:
        permissions = [
            ("list_archivoproyecto", "Can see list archivos proyectos"),
        ]


class ArchivoLiteral(TimeStampedModel):
    def archivo_upload_to(instance, filename):
        nro_literal = instance.literal.id_literal
        return "documentos/literal/%s/%s" % (nro_literal, filename)

    nombre_archivo = models.CharField(max_length=300)
    archivo = models.FileField(null=True, upload_to=archivo_upload_to)
    literal = models.ForeignKey(Literal, related_name='mis_documentos', on_delete=models.PROTECT)
    creado_por = models.ForeignKey(User, on_delete=models.PROTECT, blank=True, null=True)

    class Meta:
        permissions = [
            ("list_archivoliteral", "Can see list archivos literales"),
        ]
