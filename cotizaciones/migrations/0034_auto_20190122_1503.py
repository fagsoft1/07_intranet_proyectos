# Generated by Django 2.0.4 on 2019-01-22 20:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cotizaciones', '0033_archivocotizacion_creado_por'),
    ]

    operations = [
        migrations.AlterField(
            model_name='archivocotizacion',
            name='creado_por',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL),
        ),
    ]
