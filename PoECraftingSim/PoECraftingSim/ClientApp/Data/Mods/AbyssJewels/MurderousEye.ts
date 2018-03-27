import { Mod } from "../Mod";
import { AffixTypes, ItemTypes, Groups, Categories } from "../../Types/Types";

export class Mods {
    public Modlist: Array<Mod> = Array<Mod>();
    
    constructor() {
        //Prefixes

        //Health
        this.Modlist.push(new Mod("Hale", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "+r1 to maximum Life", 3.38, [25, 30], [0, 0], Groups.None, Categories.FlatLife));
        this.Modlist.push(new Mod("Healthy", AffixTypes.Prefix, 35, ItemTypes.MurderousEyeJewel, "+r1 to maximum Life", 3.38, [31, 35], [0, 0], Groups.None, Categories.FlatLife));
        this.Modlist.push(new Mod("Sanguine", AffixTypes.Prefix, 74, ItemTypes.MurderousEyeJewel, "+r1 to maximum Life", 1.13, [36, 45], [0, 0], Groups.None, Categories.FlatLife));
        this.Modlist.push(new Mod("Stalwart", AffixTypes.Prefix, 82, ItemTypes.MurderousEyeJewel, "+r1 to maximum Life", 1.13, [46, 50], [0, 0], Groups.None, Categories.FlatLife));

        //Mana
        this.Modlist.push(new Mod("Beryl", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "+r1 to maximum Mana", 1.13, [25, 30], [0, 0], Groups.None, Categories.FlatMana));
        this.Modlist.push(new Mod("Cobalt", AffixTypes.Prefix, 40, ItemTypes.MurderousEyeJewel, "+r1 to maximum Mana", 1.13, [31, 35], [0, 0], Groups.None, Categories.FlatMana));
        this.Modlist.push(new Mod("Azure", AffixTypes.Prefix, 75, ItemTypes.MurderousEyeJewel, "+r1 to maximum Mana", 1.13, [36, 45], [0, 0], Groups.None, Categories.FlatMana));
        this.Modlist.push(new Mod("Sapphire", AffixTypes.Prefix, 83, ItemTypes.MurderousEyeJewel, "+r1 to maximum Mana", 1.13, [46, 50], [0, 0], Groups.None, Categories.FlatMana));

        //End Prefixes


        //Suffixes
        this.Modlist.push(new Mod("Of Coals", AffixTypes.Suffix, 35, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Attacks", 1.53, [6, 10], [14, 18], Groups.None, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Of Cinders", AffixTypes.Suffix, 44, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Attacks", 1.53, [9, 12], [19, 23], Groups.None, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Of Flames", AffixTypes.Suffix, 52, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Attacks", 1.53, [11, 15], [24, 28], Groups.None, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Of Immolation", AffixTypes.Suffix, 64, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Attacks", 1.53, [13, 19], [28, 34], Groups.None, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Of Ashes", AffixTypes.Suffix, 76, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Attacks", 1.53, [15, 21], [34, 40], Groups.None, Categories.FlatFireDamage));

        this.Modlist.push(new Mod("Of Sleet", AffixTypes.Suffix, 36, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Attacks", 1.53, [6, 9], [12, 15], Groups.None, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Of Ice", AffixTypes.Suffix, 45, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Attacks", 1.53, [8, 11], [15, 19], Groups.None, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Of Rime", AffixTypes.Suffix, 53, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Attacks", 1.53, [10, 14], [20, 24], Groups.None, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Of Floe", AffixTypes.Suffix, 65, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Attacks", 1.53, [12, 16], [25, 30], Groups.None, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Of Glaciation", AffixTypes.Suffix, 77, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Attacks", 1.53, [14, 19], [31, 37], Groups.None, Categories.FlatColdDamage));

        //End Suffixes
    }    
}
