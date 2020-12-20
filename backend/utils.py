from constants import *


def price_comparator(element):
    return element['price_in_USD']

def area_fifty_less(element):
    if element['area_in_square_meters'] <= 50:
         return True
    return False

def area_fifty_hundred(element):
    if element['area_in_square_meters'] >= 50 and element['area_in_square_meters'] <= 100:
        return True
    return False

def area_hundred_two_hundreds(element):
    if element['area_in_square_meters'] >= 100 and element['area_in_square_meters'] <= 200:
        return True
    return False

def area_two_hundreds_more(element):
    if element['area_in_square_meters'] >= 200:
        return True
    return False

def floors_one(element):
    if element['floors_count'] == 1:
        return True
    return False

def floors_two(element):
    if element['floors_count'] == 2:
        return True
    return False

def floors_three(element):
    if element['floors_count'] == 3:
        return True
    return False

def floors_four(element):
    if element['floors_count'] == 4:
        return True
    return False

def floors_five(element):
    if element['floors_count'] > 4:
        return True
    return False


def filter_dwellings(price: str, area: str, floors: str, dwellings: list):

    if len(dwellings) == 0:
        return []

    if price == price_constants['asc']:
        dwellings.sort(key=price_comparator)
    elif price == price_constants['desc']:
        dwellings.sort(key=price_comparator, reverse=True)

    if area == area_constants['fiftyLess']:
        dwellings = list(filter(area_fifty_less, dwellings))
    elif area == area_constants['fiftyHundred']:
        dwellings = list(filter(area_fifty_hundred, dwellings))
    elif area == area_constants['hundredTwoHundreds']:
        dwellings = list(filter(area_hundred_two_hundreds, dwellings))
    elif area == area_constants['twoHundredsMore']:
        dwellings = list(filter(area_two_hundreds_more, dwellings))

    if floors == floors_constants['one']:
        dwellings = list(filter(floors_one, dwellings))
    elif floors == floors_constants['two']:
        dwellings = list(filter(floors_two, dwellings))
    elif floors == floors_constants['three']:
        dwellings = list(filter(floors_three, dwellings))
    elif floors == floors_constants['four']:
        dwellings = list(filter(floors_four, dwellings))
    elif floors == floors_constants['fourMore']:
        dwellings = list(filter(floors_five, dwellings))

    return dwellings


def does_user_exists(email: str, password: str, users: list):
    if len(users) == 0:
        return False

    for user in users:
        if user['email'] == email and user['password'] == password:
            return True
    return False
