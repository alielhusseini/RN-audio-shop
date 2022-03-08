import { StyleSheet } from "react-native";
import { COLOURS } from "../../../assets/Database";

export const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        paddingTop: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    left: {
        fontSize: 18,
        color: COLOURS.backgroundDark,
        padding: 12,
        backgroundColor: COLOURS.backgroundLight,
        borderRadius: 12,
    },
    productsCartContainer: {
        paddingHorizontal: 16
    },
    productsCart: {
        width: '100%',
        height: 100,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        width: '30%',
        height: '100%',
        padding: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOURS.backgroundLight,
        borderRadius: 10,
        marginRight: 22,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    productNameContainer: {},
    productName: {
        fontSize: 14,
        maxHeight: '100%',
        color: COLOURS.black,
        fontWeight: '600',
        letterSpacing: 1,
    },
    prices: {
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        opacity: .6,
    },
    plusIconContainer: {
        borderRadius: 100,
        marginLeft: 20,
        padding: 4,
        borderWidth: 1,
        borderColor: COLOURS.backgroundMedium,
        opcity: .5,
    },
    minusIconContainer: {
        borderRadius: 100,
        marginRight: 20,
        padding: 4,
        borderWidth: 1,
        borderColor: COLOURS.backgroundMedium,
        opcity: .5,
    },
    signIcon: {
        fontSize: 16,
        color: COLOURS.backgroundDark,
    },
    deleteIcon: {
        fontSize: 16,
        color: COLOURS.backgroundDark,
        backgroundColor: COLOURS.backgroundLight,
        padding: 8,
        borderRadius: 100,
        overflow: 'hidden',
    }
})