# Generated by Django 4.2.5 on 2024-10-08 04:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0009_alter_staff_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='staff',
            name='password',
            field=models.CharField(default='pbkdf2_sha256$600000$qJzgkGSu7L378XXBhIe0TL$41Si4RErPM95S/PaqdYCdJOPPLHEw2E4soh3d9+4Hf4=', max_length=128),
        ),
    ]
