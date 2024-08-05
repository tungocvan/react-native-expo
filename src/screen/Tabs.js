import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
//import { Home } from './Home';
import { Home } from "./Home";
import { Customer } from "./Customer";
import { Alerts } from "./Alerts";
import { Tools } from "./Tools";
import { Account } from "./Account";

function Tabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Trang Chủ",
          tabBarIcon: () => (
            <Ionicons name="home-outline" color="red" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Customer"
        component={Customer}
        initialParams={{ component: "Customer" }}
        options={{
          tabBarLabel: "Khách hàng",
          tabBarIcon: () => <Ionicons name="people" color="red" size={24} />,
        }}
      />
      <Tab.Screen
        name="Alerts"
        component={Alerts}
        initialParams={{ component: "Alerts" }}
        options={{
          tabBarLabel: "Thông báo",
          tabBarIcon: () => (
            <Ionicons name="notifications-outline" color="red" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Tools"
        component={Tools}
        initialParams={{ component: "Tools" }}
        options={{
          tabBarLabel: "Công cụ",
          tabBarIcon: () => <Ionicons name="hammer" color="red" size={24} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        initialParams={{ component: "Account" }}
        options={{
          tabBarLabel: "Tài khoản",
          tabBarIcon: () => (
            <Ionicons name="person-add" color="red" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
