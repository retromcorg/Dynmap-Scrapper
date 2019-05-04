#Some people said getting player data from Dynmap is impossible, which it isn't and its extremely easy.
import requests, json

content = requests.get("http://portal.retrominecraft.com/dynmap/standalone/dynmap_retromc.json")
json = json.loads(content.content)

list = []
i = 0
while i < len(json['players']):
    list.append(json['players'][i]['account'])
    i = i + 1
print(list, " [", len(list), "]" )
