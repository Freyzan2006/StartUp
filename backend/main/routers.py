from rest_framework import routers 

from main.views import UsersViewSet 

router = routers.SimpleRouter()
router.register(r"users", UsersViewSet, basename="users")


