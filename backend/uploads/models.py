from django.db import models

# Create your models here.
class UploadFile(models.Model):
    cust_id = models.CharField(max_length=20)
    f_data = models.FileField(upload_to="documents", null=True)
    upload_dt = models.DateTimeField(auto_now=True)