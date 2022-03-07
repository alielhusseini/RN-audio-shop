import { StyleSheet } from "react-native";
import { COLOURS } from "../../../assets/Database";

export const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: COLOURS.white,
    },
    back: {
        fontSize: 18,
        color: COLOURS.backgroundDark,
        backgroundColor: COLOURS.white,
        borderRadius: 10,
        padding: 12,
        overflow: 'hidden',
    },
    header: {
        width: '100%',
        backgroundColor: COLOURS.backgroundLight,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
    },
    headerContent: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 16,
        paddingLeft: 16,
    },
    imageHeader: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    pagination: {
        width: '100%',
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'row',
        marginBottom: 16,
        marginTop: 32,
    },
    bodyContainer: {
        paddingHorizontal: 16,
        paddingTop: 6,
    },
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 14,
    },
    iconCart: {
        fontSize: 18,
        color: COLOURS.blue,
        marginRight: 6,
    },
    iconLink: {
        fontSize: 24,
        color: COLOURS.blue,
        marginRight: 6,
        backgroundColor: COLOURS.blue + 10,
        padding: 8,
        overflow: 'hidden',
        borderRadius: 20,
    },
    locationPinContainer: {
        color: COLOURS.blue,
        backgroundColor: COLOURS.backgroundLight,
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        borderRadius: 100,
        marginRight: 10,
    },
    iconPin: {
        fontSize: 16,
        color: COLOURS.blue,
    },
    addressContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 14,
        justifyContent: 'space-between',
        borderBottomColor: COLOURS.backgroundLight,
        borderBottomWidth: 1,
        paddingBottom: 20,
    },
    iconRight: {
        fontSize: 18,
        color: COLOURS.backgroundDark,
    },
    buttonContainer: {
        position: "absolute",
        width: '100%',
        height: '8%',
        bottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
    },
    button: {
        width: '86%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: COLOURS.blue,
    },
})