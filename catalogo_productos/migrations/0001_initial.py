# Generated by Django 2.0.4 on 2019-05-14 18:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('sistema_informacion_origen', '0003_sistemainformacionorigen_codigo_amarre'),
        ('importaciones', '0002_auto_20190416_1051'),
        ('cargues_catalogos', '0011_auto_20190415_1106'),
    ]

    operations = [
        migrations.CreateModel(
            name='ItemVentaCatalogo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('referencia_catalogo', models.CharField(max_length=100, null=True)),
                ('nombre_catalogo', models.CharField(max_length=200, null=True)),
                ('unidad_medida_catalogo', models.CharField(max_length=100, null=True)),
                ('costo_catalogo', models.DecimalField(decimal_places=4, default=0, max_digits=18)),
                ('activo', models.BooleanField(default=True)),
                ('origen', models.CharField(default='LP_INTRANET', max_length=20)),
                ('item_sistema_informacion', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='articulos_catalogo', to='cargues_catalogos.ItemsCatalogo')),
                ('margen', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='articulos_catalogo', to='importaciones.MargenProvedor')),
                ('proveedor_importacion', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='articulos_catalogo', to='importaciones.ProveedorImportacion')),
                ('sistema_informacion', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='sistema_informacion_origen.SistemaInformacionOrigen')),
            ],
        ),
    ]
