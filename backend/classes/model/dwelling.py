class Dwelling:
    
    def __init__ (self, img, title: 'title', area_in_square_meters = 0, price_in_USD = 0,\
        location = "Shwadchack", floors_count = 0, swimming_pool = False, description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
                ' tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' +
                ' nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis' +
                ' aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat' +
                ' nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui' ):
        self.img = img
        self.title = title
        self.area_in_square_meters = area_in_square_meters
        self.price_in_USD = price_in_USD
        self.location = location
        self.floors_count = floors_count
        self.swimming_pool = swimming_pool
        self.description = description

    def calculate_distance_to_closer_school_in_meters(self, list_of_location):
        smallest_distance =  math.sqrt(((list_of_location[0].x_in_decimal_degrees - self.location.x_in_decimal_degrees) ** 2)\
            + ((list_of_location[0].y_in_decimal_degrees - self.location.y_in_decimal_degrees) ** 2))
        for location in list_of_location:
            distance = math.sqrt(((location.x_in_decimal_degrees - self.location.x_in_decimal_degrees) ** 2)\
                    + ((location.y_in_decimal_degrees - self.location.y_in_decimal_degrees) ** 2))
            if (distance < smallest_distance):
                smallest_distance = distance
        return smallest_distance * 111000            

    def calculate_distance_to_closer_kindergarden_in_meters(self, list_of_location):
        smallest_distance =  math.sqrt(((list_of_location[0].x_in_decimal_degrees - self.location.x_in_decimal_degrees) ** 2)\
            + ((list_of_location[0].y_in_decimal_degrees - self.location.y_in_decimal_degrees) ** 2))
        for location in list_of_location:
            distance = math.sqrt(((location.x_in_decimal_degrees - self.location.x_in_decimal_degrees) ** 2)\
                    + ((location.y_in_decimal_degrees - self.location.y_in_decimal_degrees) ** 2))
            if (distance < smallest_distance):
                smallest_distance = distance
        return smallest_distance * 111000 
    
    def calculate_distance_to_closer_playground_in_meters(self, list_of_location):
        smallest_distance =  math.sqrt(((list_of_location[0].x_in_decimal_degrees - self.location.x_in_decimal_degrees) ** 2)\
            + ((list_of_location[0].y_in_decimal_degrees - self.location.y_in_decimal_degrees) ** 2))
        for location in list_of_location:
            distance = math.sqrt(((location.x_in_decimal_degrees - self.location.x_in_decimal_degrees) ** 2)\
                    + ((location.y_in_decimal_degrees - self.location.y_in_decimal_degrees) ** 2))
            if (distance < smallest_distance):
                smallest_distance = distance
        return smallest_distance * 111000 