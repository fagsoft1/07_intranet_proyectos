# Generated by Django 2.0.4 on 2019-04-08 17:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sistema_informacion_origen', '0003_sistemainformacionorigen_codigo_amarre'),
        ('clientes', '0013_canaldistribucion_grupocliente_tipoindustria'),
    ]

    operations = [
        migrations.AddField(
            model_name='clientebiable',
            name='sistema_informacion',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='sistema_informacion_origen.SistemaInformacionOrigen'),
        ),
    ]
