import * as React from 'react';  
import { View, Text, StyleSheet, SectionList } from 'react-native';

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            { name: 'Hummus', price: '$5.00' },
            { name: 'Moutabal', price: '$5.00' },
            { name: 'Falafel', price: '$7.50' },
            { name: 'Marinated Olives', price: '$5.00' },
            { name: 'Kofta', price: '$5.00' },
            { name: 'Eggplant Salad', price: '$8.50' },
        ],
    },
    {
        title: 'Main Dishes',
        data: [
            { name: 'Lentil Burger', price: '$10.00' },
            { name: 'Smoked Salmon', price: '$14.00' },
            { name: 'Kofta Burger', price: '$11.00' },
            { name: 'Turkish Kebab', price: '$15.50' },
        ],
    },
    {
        title: 'Sides',
        data: [
            { name: 'Fries', price: '$3.00', id: '11K' },
            { name: 'Buttered Rice', price: '$3.00' },
            { name: 'Bread Sticks', price: '$3.00' },
            { name: 'Pita Pocket', price: '$3.00' },
            { name: 'Lentil Soup', price: '$3.75' },
            { name: 'Greek Salad', price: '$6.00' },
            { name: 'Rice Pilaf', price: '$4.00' },
        ],
    },
    {
        title: 'Desserts',
        data: [
            { name: 'Baklava', price: '$3.00' },
            { name: 'Tartufo', price: '$3.00' },
            { name: 'Tiramisu', price: '$5.00' },
            { name: 'Panna Cotta', price: '$5.00' },
        ],
    },
];

const Item = ({ name, price }) => (
    <View style={styles.innerContainer}>
        <Text style={styles.itemText}>{name}</Text>
        <Text style={styles.itemText}>{price}</Text>
    </View>
);

export default function MenuItemsSL() {
    const renderItem = ({ item }) => <Item name={item.name} price={item.price}/>
    const renderSectionHeader = ({ section: {title} }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
    );

    return(
        <View style={styles.container}>
            <SectionList
                keyExtractor={(item, index) => item + index}
                sections={menuItemsToDisplay}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
            >
            </SectionList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: '#333333',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sectionHeader: {
        backgroundColor: '#F4CE14',
        color: '#333333',
        fontSize: 30,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 20,
    },
});
  