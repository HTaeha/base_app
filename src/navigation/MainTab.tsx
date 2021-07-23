import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Tab1 from '../screens/Tab1'
import Tab2 from '../screens/Tab2'
import Tab3 from '../screens/Tab3'
import Tab4 from '../screens/Tab4'
import CounterContainer from '../containers/CounterContainer'
import TodoApp from '../containers/TodoApp'

export type TabParamList = {
    Tab1: undefined,
    Tab2: undefined,
    Tab3: undefined,
    Tab4: undefined,
}

const Tab = createBottomTabNavigator<TabParamList>()

const MainTab = () => {
    return (
		<Tab.Navigator>
			<Tab.Screen 
				name={"Tab1"}
				component={Tab1}
			/>
			<Tab.Screen 
				name={"Tab2"}
				component={CounterContainer}
			/>
			<Tab.Screen 
				name={"Tab3"}
				component={TodoApp}
			/>
			<Tab.Screen 
				name={"Tab4"}
				component={Tab4}
			/>

		</Tab.Navigator>
    )
}
export default MainTab