from django.db import models


class Banker(models.Model):
    id = models.IntegerField(primary_key=True) ## should be AutoField??
    name = models.TextField()
    realm = models.TextField()
    account = models.IntegerField()
    bank_num = models.IntegerField()
    bank_gold = models.IntegerField()
    trade_timestamp = models.IntegerField(blank=True, null=True)
    trade_confirmation = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return '-'.join((self.realm, str(self.bank_num)))

    class Meta:
        managed = False
        db_table = 'bankers'


class Realm(models.Model):
    id = models.IntegerField(primary_key=True)
    realm = models.TextField()
    code = models.TextField()
    price_per_mil = models.IntegerField()

    def __str__(self):
        return self.realm

    class Meta:
        managed = False
        db_table = 'realms'
