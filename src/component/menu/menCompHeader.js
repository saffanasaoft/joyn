import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const MenuCompHeader = ({
    icon, title, onPress
}) => (
    <View style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    }}>
        <TouchableOpacity onPress={onPress}>
           <Image 
                source={icon}
                style={{ 
                    width: 35, 
                    height: 35,
                    marginHorizontal: 15
                }}
            /> 
        </TouchableOpacity>
        <Text style={{ paddingVertical: 5, }}>{title}</Text>
    </View>
);

export default MenuCompHeader;