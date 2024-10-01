# Generated by Django 4.2.13 on 2024-09-29 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0019_alter_student_password'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='receipt_image',
            field=models.ImageField(blank=True, null=True, upload_to='receipts/'),
        ),
        migrations.AlterField(
            model_name='student',
            name='password',
            field=models.CharField(default='pbkdf2_sha256$600000$CVQGzroJ86xsMSkRtFkIgW$Mu+nMEFhFGFBD8hu78HyPr3lftilQH5hQcW2/O23zUA=', max_length=128),
        ),
    ]
