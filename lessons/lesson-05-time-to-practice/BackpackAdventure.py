
#0️⃣ Start Backpack Game
#--------------------------------------------------
backpack = []
print('0. 🙂 Starting Journey with Empty Backpack.')

print('🎒', backpack )
print('-'*50)


#1️⃣ Pick up StarterKit Items.
#--------------------------------------------------
print('1. 📦 Picking Up StarterKit (Armor, Shield, Sword, Potion).')
backpack .append('Sword')
backpack .append('Armor')
backpack .append('Shield')
backpack .append('Potion')

print('🎒', backpack )
print('-'*50)


#2️⃣ Loot a Treasure Chest
#--------------------------------------------------
chest     = ['Map', 'Potion', 'Compass', 'Potion']
backpack += chest

print('2. 🎁 Looting a Treasure  Chest!')
print(f'Chest: {chest}')

print('🎒', backpack )
print('-'*50)

#3️⃣ Visit Merchant.
#--------------------------------------------------
print('3. 🧙‍♂️  Visiting Merchant')
print('- Selling the Shield.')
print('- Upgrading Sword -> Magic GreatSword')

backpack.remove('Shield')                    # Remove Shield
inx            = backpack .index('Sword')    # Find Sword Position
backpack [inx] = 'Magic-GreatSword'          # Change Sword at any index

print('🎒', backpack )
print('-'*50)

#4️⃣ Check Inventory
#--------------------------------------------------
print('4. 🔎 Checking Backpack: ')
print('🎒', backpack)

total_count   = len(backpack)
unique_items  = set(backpack)
unique_count  = len(unique_items)
potion_count  = backpack.count('Potion')

print(f'There are {total_count} Items in Total.')
print(f'There are {unique_count} Unique Items.')
print(f'There are {potion_count} Potions.')
print('-'*50)

#5️⃣ Dropped the Backpack.
#--------------------------------------------------
print('5. 🙃 Dropped the Backpack Upside-Down... ')
backpack.reverse()

print('🎒', backpack)
print('-'*50)

#6️⃣ Sorting Items
#--------------------------------------------------
print('6. ➡️  Sorting Items: ')
backpack.sort()

print('🎒', backpack)
print('-'*50)

backpack.sort(key=len)

print('🎒', backpack)
print('-'*50)

#7️⃣ 3 Items Stolen During Sleep
#--------------------------------------------------
print('7. 💤 Sleeping...')

a      = backpack.pop()
b      = backpack.pop(2)
c      = backpack.pop()
stolen = [a,b,c]

print(f'Stolen Items: ', stolen)
print('🎒', backpack)
print('-'*50)

#8️⃣ Found Magic-Ring
#--------------------------------------------------
print('8. 💍 Found Magic Ring And Coin Pouch')
ring       = 'Magic Ring'
coin_pouch = ['Gold Coin', 'Silver Coin']

backpack.insert(0, ring)
backpack.append(coin_pouch)

print('🎒', backpack)
print('-'*50)

#9️⃣ Half Backpack Contents Have Teleported
#--------------------------------------------------
print('9. 💥 Half Items Magically Disappeared. Damn You Magic Ring...')

count    = len(backpack)
half     = count // 2
backpack = backpack[half:]

print('🎒', backpack)
print('-'*50)

#🔟 Bandits Stole Empty Backpack
#--------------------------------------------------
print('10. 🧌  Bandits Attacked.')
print('Backpack Stolen...')

backpack = None                       # None is not the same as empty list! 

print('🎒', backpack)
print('-'*50)

print('Game Over')
print('Learn More Python To Fight Back!')
