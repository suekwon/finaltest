# Generated by Django 4.1.3 on 2022-11-24 11:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tradeInfo', '0003_remove_tradeinfo_fdata'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tradeinfo',
            name='id',
        ),
        migrations.AlterField(
            model_name='tradeinfo',
            name='trade_id',
            field=models.CharField(max_length=16, primary_key=True, serialize=False, verbose_name='trade_id'),
        ),
    ]
