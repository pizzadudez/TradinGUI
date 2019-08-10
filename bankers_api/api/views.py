from django_filters.rest_framework import DjangoFilterBackend
from api.models import Banker
from api.serializers import BankerSerializer
from rest_framework import generics


class BankerList(generics.ListAPIView):
    queryset = Banker.objects.all()
    serializer_class = BankerSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['realm', 'account']


class BankerDetail(generics.RetrieveUpdateAPIView):
    queryset = Banker.objects.all()
    serializer_class = BankerSerializer