# Generated by Django 2.0.1 on 2018-01-29 18:10

from django.db import migrations, models
import django.utils.timezone
import model_utils.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ItemsBiable',
            fields=[
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('id_item', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('id_referencia', models.CharField(max_length=20)),
                ('descripcion', models.CharField(max_length=40)),
                ('descripcion_dos', models.CharField(max_length=40)),
                ('activo', models.BooleanField(default=True)),
                ('nombre_tercero', models.CharField(max_length=120)),
                ('desc_item_padre', models.CharField(max_length=40)),
                ('unidad_medida_inventario', models.CharField(max_length=6)),
                ('id_procedencia', models.CharField(max_length=1)),
                ('ultimo_costo', models.DecimalField(decimal_places=3, default=0, max_digits=18)),
            ],
            options={
                'verbose_name': 'Item',
                'verbose_name_plural': 'C-2.1 Items',
            },
        ),
    ]