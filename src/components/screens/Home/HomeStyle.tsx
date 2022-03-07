import { StyleSheet } from "react-native";
import { COLOURS } from "../../../assets/Database";

export const styles = StyleSheet.create({
   body: {
      width: '100%',
      height: '100%',
      backgroundColor: COLOURS.white,
   },
   iconContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
   },
   iconShop: {
      fontSize: 18,
      color: COLOURS.backgroundMedium,
      backgroundColor: COLOURS.backgroundLight,
      padding: 12,
      borderRadius: 10,
      overflow: 'hidden', // for ios to have border radius
   },
   iconCart: {
      fontSize: 18,
      color: COLOURS.backgroundMedium,
      padding: 12,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: COLOURS.backgroundLight,
      overflow: 'hidden', // for ios to have border radius
   },
   titleContainer: {
      marginBottom: 10,
      padding: 16,
   },
   titleText: {
      marginBottom: 10,
      letterSpacing: 1,
      fontSize: 26,
      color: COLOURS.black,
      fontWeight: '500',
   },
   introText: {
      marginBottom: 10,
      letterSpacing: 1,
      fontSize: 14,
      color: COLOURS.black,
      fontWeight: '400',
      lineHeight: 24,
   },
   mainItemsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   itemsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   textItem: {
      fontSize: 18,
      color: COLOURS.black,
      fontWeight: '500',
      letterSpacing: 1,
   },
   numberItem: {
      fontSize: 14,
      color: COLOURS.black,
      fontWeight: '400',
      opacity: .5,
      marginLeft: 10,
   },
   seeAll: {
      fontSize: 14,
      color: COLOURS.blue,
      fontWeight: '400',
   },
   itemCard: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
   },
   itemTouchCard: {
      width: '48%',
      marginVertical: 14,
   },
   itemContainer: {
      width: '100%',
      height: 100,
      borderRadius: 10,
      backgroundColor: COLOURS.backgroundLight,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 8,
   },
   itemImage: {
      width: '80%',
      height: '80%',
      resizeMode: 'contain',
   },
   isOffContainer: {
      position: 'absolute',
      width: '20%',
      height: '24%',
      top: 0,
      left: 0,
      backgroundColor: COLOURS.green,
      borderTopLeftRadius: 10,
      borderBottomRightRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
   },
   isOffText: {
      fontSize: 12,
      color: COLOURS.white,
      fontWeight: 'bold',
      letterSpacing: 1,
   },
   itemName: {
      fontSize: 12,
      fontWeight: '600',
      color: COLOURS.black,
      marginBottom: 2,
   },
   circleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   circle: {
      fontSize: 12,
      marginRight: 6,
      color: COLOURS.green,
   },
   circleText: {
      fontSize: 12,
      color: COLOURS.green,
   },
});