import { Mod } from "../Mod";
import { AffixTypes, ItemTypes, Groups, Categories } from "../../Types/Types";

export class Mods {
    public Modlist: Array<Mod> = Array<Mod>();
    
    constructor() {
        //Prefixes

        //Health
        this.Modlist.push(new Mod("Hale", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "+r1 to maximum Life", 338, [25, 30], [0, 0], Groups.None, Categories.FlatLife));        
        this.Modlist.push(new Mod("Healthy", AffixTypes.Prefix, 35, ItemTypes.MurderousEyeJewel, "+r1 to maximum Life", 338, [31, 35], [0, 0], Groups.None, Categories.FlatLife));
        this.Modlist.push(new Mod("Sanguine", AffixTypes.Prefix, 74, ItemTypes.MurderousEyeJewel, "+r1 to maximum Life", 113, [36, 45], [0, 0], Groups.None, Categories.FlatLife));
        this.Modlist.push(new Mod("Stalwart", AffixTypes.Prefix, 82, ItemTypes.MurderousEyeJewel, "+r1 to maximum Life", 113, [46, 50], [0, 0], Groups.None, Categories.FlatLife));
        //Mana
        this.Modlist.push(new Mod("Beryl", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "+r1 to maximum Mana", 113, [25, 30], [0, 0], Groups.None, Categories.FlatMana));
        this.Modlist.push(new Mod("Cobalt", AffixTypes.Prefix, 40, ItemTypes.MurderousEyeJewel, "+r1 to maximum Mana", 113, [31, 35], [0, 0], Groups.None, Categories.FlatMana));
        this.Modlist.push(new Mod("Azure", AffixTypes.Prefix, 75, ItemTypes.MurderousEyeJewel, "+r1 to maximum Mana", 113, [36, 45], [0, 0], Groups.None, Categories.FlatMana));
        this.Modlist.push(new Mod("Sapphire", AffixTypes.Prefix, 83, ItemTypes.MurderousEyeJewel, "+r1 to maximum Mana", 113, [46, 50], [0, 0], Groups.None, Categories.FlatMana));
        //Increased Damage over Time while Dual Wielding
        this.Modlist.push(new Mod("Degenerative", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "r1% increased Damage over Time while Dual Wielding", 45, [10, 14], [0, 0], Groups.DualWielding, Categories.None));
        //Increased Damage over Time while wielding a Two Handed Weapon
        this.Modlist.push(new Mod("Degenerative", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "r1% increased Damage over Time while wielding a Two Handed Weapon", 68, [10, 14], [0, 0], Groups.TwoHanded, Categories.None));
        //Increased Damage over Time while holding a Shield
        this.Modlist.push(new Mod("Degenerative", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "r1% increased Damage over Time while holding a Shield", 45, [10, 14], [0, 0], Groups.Shield, Categories.None));
        //Physical Damage to Dagger Attacks
        this.Modlist.push(new Mod("Glinting", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Dagger Attacks", 56, [1, 2], [3, 4], Groups.Dagger, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Gleaming", AffixTypes.Prefix, 42, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Dagger Attacks", 56, [3, 4], [5, 6], Groups.Dagger, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Tempered", AffixTypes.Prefix, 64, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Dagger Attacks", 56, [5, 6], [7, 9], Groups.Dagger, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Flaring", AffixTypes.Prefix, 83, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Dagger Attacks", 56, [7, 8], [10, 12], Groups.Dagger, Categories.FlatPhysicalDamage));
        //Physical Damage to Claw Attacks
        this.Modlist.push(new Mod("Glinting", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Claw Attacks", 56, [1, 2], [3, 4], Groups.Claw, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Gleaming", AffixTypes.Prefix, 42, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Claw Attacks", 56, [3, 4], [5, 6], Groups.Claw, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Tempered", AffixTypes.Prefix, 64, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Claw Attacks", 56, [5, 6], [7, 9], Groups.Claw, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Flaring", AffixTypes.Prefix, 83, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Claw Attacks", 56, [7, 8], [10, 12], Groups.Claw, Categories.FlatPhysicalDamage));
        //Physical Damage to Sword Attacks
        this.Modlist.push(new Mod("Glinting", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Sword Attacks", 56, [1, 2], [3, 4], Groups.Sword, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Gleaming", AffixTypes.Prefix, 42, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Sword Attacks", 56, [3, 4], [5, 6], Groups.Sword, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Tempered", AffixTypes.Prefix, 64, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Sword Attacks", 56, [5, 6], [7, 9], Groups.Sword, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Flaring", AffixTypes.Prefix, 83, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Sword Attacks", 56, [7, 8], [10, 12], Groups.Sword, Categories.FlatPhysicalDamage));
        //Physical Damage to Axe Attacks
        this.Modlist.push(new Mod("Glinting", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Axe Attacks", 56, [1, 2], [3, 4], Groups.Axe, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Gleaming", AffixTypes.Prefix, 42, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Axe Attacks", 56, [3, 4], [5, 6], Groups.Axe, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Tempered", AffixTypes.Prefix, 64, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Axe Attacks", 56, [5, 6], [7, 9], Groups.Axe, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Flaring", AffixTypes.Prefix, 83, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Axe Attacks", 56, [7, 8], [10, 12], Groups.Axe, Categories.FlatPhysicalDamage));
        //Physical Damage to Mace Attacks
        this.Modlist.push(new Mod("Glinting", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Mace Attacks", 56, [1, 2], [3, 4], Groups.Mace, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Gleaming", AffixTypes.Prefix, 42, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Mace Attacks", 56, [3, 4], [5, 6], Groups.Mace, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Tempered", AffixTypes.Prefix, 64, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Mace Attacks", 56, [5, 6], [7, 9], Groups.Mace, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Flaring", AffixTypes.Prefix, 83, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Mace Attacks", 56, [7, 8], [10, 12], Groups.Mace, Categories.FlatPhysicalDamage));
        //Physical Damage to Staff Attacks
        this.Modlist.push(new Mod("Glinting", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Staff Attacks", 56, [1, 2], [3, 4], Groups.Staff, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Gleaming", AffixTypes.Prefix, 42, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Staff Attacks", 56, [3, 4], [5, 6], Groups.Staff, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Tempered", AffixTypes.Prefix, 64, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Staff Attacks", 56, [5, 6], [7, 9], Groups.Staff, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Flaring", AffixTypes.Prefix, 83, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Staff Attacks", 56, [7, 8], [10, 12], Groups.Staff, Categories.FlatPhysicalDamage));
        //Lightning Damage to Dagger Attacks
        this.Modlist.push(new Mod("Humming", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Dagger Attacks", 56, [1, 2], [27, 28], Groups.Dagger, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Sparking", AffixTypes.Prefix, 37, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Dagger Attacks", 56, [1, 3], [33, 34], Groups.Dagger, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Arcing", AffixTypes.Prefix, 48, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Dagger Attacks", 56, [1, 4], [40, 43], Groups.Dagger, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Shocking", AffixTypes.Prefix, 60, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Dagger Attacks", 56, [2, 5], [47, 50], Groups.Dagger, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Discharging", AffixTypes.Prefix, 70, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Dagger Attacks", 56, [3, 6], [57, 61], Groups.Dagger, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Electrocuting", AffixTypes.Prefix, 82, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Dagger Attacks", 56, [3, 7], [68, 72], Groups.Dagger, Categories.FlatLightningDamage));
        //Lightning Damage to Claw Attacks
        this.Modlist.push(new Mod("Humming", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Claw Attacks", 56, [1, 2], [27, 28], Groups.Claw, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Sparking", AffixTypes.Prefix, 37, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Claw Attacks", 56, [1, 3], [33, 34], Groups.Claw, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Arcing", AffixTypes.Prefix, 48, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Claw Attacks", 56, [1, 4], [40, 43], Groups.Claw, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Shocking", AffixTypes.Prefix, 60, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Claw Attacks", 56, [2, 5], [47, 50], Groups.Claw, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Discharging", AffixTypes.Prefix, 70, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Claw Attacks", 56, [3, 6], [57, 61], Groups.Claw, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Electrocuting", AffixTypes.Prefix, 82, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Claw Attacks", 56, [3, 7], [68, 72], Groups.Claw, Categories.FlatLightningDamage));
        //Lightning Damage to Sword Attacks
        this.Modlist.push(new Mod("Humming", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Sword Attacks", 56, [1, 2], [27, 28], Groups.Sword, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Sparking", AffixTypes.Prefix, 37, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Sword Attacks", 56, [1, 3], [33, 34], Groups.Sword, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Arcing", AffixTypes.Prefix, 48, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Sword Attacks", 56, [1, 4], [40, 43], Groups.Sword, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Shocking", AffixTypes.Prefix, 60, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Sword Attacks", 56, [2, 5], [47, 50], Groups.Sword, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Discharging", AffixTypes.Prefix, 70, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Sword Attacks", 56, [3, 6], [57, 61], Groups.Sword, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Electrocuting", AffixTypes.Prefix, 82, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Sword Attacks", 56, [3, 7], [68, 72], Groups.Sword, Categories.FlatLightningDamage));
        //Lightning Damage to Axe Attacks
        this.Modlist.push(new Mod("Humming", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Axe Attacks", 56, [1, 2], [27, 28], Groups.Axe, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Sparking", AffixTypes.Prefix, 37, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Axe Attacks", 56, [1, 3], [33, 34], Groups.Axe, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Arcing", AffixTypes.Prefix, 48, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Axe Attacks", 56, [1, 4], [40, 43], Groups.Axe, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Shocking", AffixTypes.Prefix, 60, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Axe Attacks", 56, [2, 5], [47, 50], Groups.Axe, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Discharging", AffixTypes.Prefix, 70, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Axe Attacks", 56, [3, 6], [57, 61], Groups.Axe, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Electrocuting", AffixTypes.Prefix, 82, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Axe Attacks", 56, [3, 7], [68, 72], Groups.Axe, Categories.FlatLightningDamage));
        //Lightning Damage to Mace Attacks
        this.Modlist.push(new Mod("Humming", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Mace Attacks", 56, [1, 2], [27, 28], Groups.Mace, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Sparking", AffixTypes.Prefix, 37, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Mace Attacks", 56, [1, 3], [33, 34], Groups.Mace, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Arcing", AffixTypes.Prefix, 48, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Mace Attacks", 56, [1, 4], [40, 43], Groups.Mace, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Shocking", AffixTypes.Prefix, 60, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Mace Attacks", 56, [2, 5], [47, 50], Groups.Mace, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Discharging", AffixTypes.Prefix, 70, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Mace Attacks", 56, [3, 6], [57, 61], Groups.Mace, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Electrocuting", AffixTypes.Prefix, 82, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Mace Attacks", 56, [3, 7], [68, 72], Groups.Mace, Categories.FlatLightningDamage));
        //Lightning Damage to Staff Attacks
        this.Modlist.push(new Mod("Humming", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Staff Attacks", 56, [1, 2], [27, 28], Groups.Staff, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Sparking", AffixTypes.Prefix, 37, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Staff Attacks", 56, [1, 3], [33, 34], Groups.Staff, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Arcing", AffixTypes.Prefix, 48, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Staff Attacks", 56, [1, 4], [40, 43], Groups.Staff, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Shocking", AffixTypes.Prefix, 60, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Staff Attacks", 56, [2, 5], [47, 50], Groups.Staff, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Discharging", AffixTypes.Prefix, 70, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Staff Attacks", 56, [3, 6], [57, 61], Groups.Staff, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Electrocuting", AffixTypes.Prefix, 82, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Staff Attacks", 56, [3, 7], [68, 72], Groups.Staff, Categories.FlatLightningDamage));
        //Fire Damage to Dagger Attacks
        this.Modlist.push(new Mod("Heated", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Dagger Attacks", 56, [7, 10], [15, 18], Groups.Dagger, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Flaming", AffixTypes.Prefix, 40, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Dagger Attacks", 56, [9, 12], [19, 22], Groups.Dagger, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Scorching", AffixTypes.Prefix, 51, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Dagger Attacks", 56, [11, 15], [23, 27], Groups.Dagger, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Incinerating", AffixTypes.Prefix, 62, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Dagger Attacks", 56, [13, 18], [27, 31], Groups.Dagger, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Blasting", AffixTypes.Prefix, 72, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Dagger Attacks", 56, [16, 22], [32, 38], Groups.Dagger, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Cremating", AffixTypes.Prefix, 84, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Dagger Attacks", 56, [19, 25], [39, 45], Groups.Dagger, Categories.FlatFireDamage));
        //Fire Damage to Claw Attacks
        this.Modlist.push(new Mod("Heated", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Claw Attacks", 56, [7, 10], [15, 18], Groups.Claw, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Flaming", AffixTypes.Prefix, 40, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Claw Attacks", 56, [9, 12], [19, 22], Groups.Claw, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Scorching", AffixTypes.Prefix, 51, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Claw Attacks", 56, [11, 15], [23, 27], Groups.Claw, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Incinerating", AffixTypes.Prefix, 62, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Claw Attacks", 56, [13, 18], [27, 31], Groups.Claw, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Blasting", AffixTypes.Prefix, 72, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Claw Attacks", 56, [16, 22], [32, 38], Groups.Claw, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Cremating", AffixTypes.Prefix, 84, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Claw Attacks", 56, [19, 25], [39, 45], Groups.Claw, Categories.FlatFireDamage));
        //Fire Damage to Sword Attacks
        this.Modlist.push(new Mod("Heated", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Sword Attacks", 56, [7, 10], [15, 18], Groups.Sword, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Flaming", AffixTypes.Prefix, 40, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Sword Attacks", 56, [9, 12], [19, 22], Groups.Sword, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Scorching", AffixTypes.Prefix, 51, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Sword Attacks", 56, [11, 15], [23, 27], Groups.Sword, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Incinerating", AffixTypes.Prefix, 62, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Sword Attacks", 56, [13, 18], [27, 31], Groups.Sword, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Blasting", AffixTypes.Prefix, 72, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Sword Attacks", 56, [16, 22], [32, 38], Groups.Sword, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Cremating", AffixTypes.Prefix, 84, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Sword Attacks", 56, [19, 25], [39, 45], Groups.Sword, Categories.FlatFireDamage));
        //Fire Damage to Axe Attacks
        this.Modlist.push(new Mod("Heated", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Axe Attacks", 56, [7, 10], [15, 18], Groups.Axe, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Flaming", AffixTypes.Prefix, 40, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Axe Attacks", 56, [9, 12], [19, 22], Groups.Axe, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Scorching", AffixTypes.Prefix, 51, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Axe Attacks", 56, [11, 15], [23, 27], Groups.Axe, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Incinerating", AffixTypes.Prefix, 62, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Axe Attacks", 56, [13, 18], [27, 31], Groups.Axe, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Blasting", AffixTypes.Prefix, 72, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Axe Attacks", 56, [16, 22], [32, 38], Groups.Axe, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Cremating", AffixTypes.Prefix, 84, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Axe Attacks", 56, [19, 25], [39, 45], Groups.Axe, Categories.FlatFireDamage));
        //Fire Damage to Mace Attacks
        this.Modlist.push(new Mod("Heated", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Mace Attacks", 56, [7, 10], [15, 18], Groups.Mace, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Flaming", AffixTypes.Prefix, 40, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Mace Attacks", 56, [9, 12], [19, 22], Groups.Mace, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Scorching", AffixTypes.Prefix, 51, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Mace Attacks", 56, [11, 15], [23, 27], Groups.Mace, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Incinerating", AffixTypes.Prefix, 62, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Mace Attacks", 56, [13, 18], [27, 31], Groups.Mace, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Blasting", AffixTypes.Prefix, 72, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Mace Attacks", 56, [16, 22], [32, 38], Groups.Mace, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Cremating", AffixTypes.Prefix, 84, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Mace Attacks", 56, [19, 25], [39, 45], Groups.Mace, Categories.FlatFireDamage));
        //Fire Damage to Staff Attacks
        this.Modlist.push(new Mod("Heated", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Staff Attacks", 56, [7, 10], [15, 18], Groups.Staff, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Flaming", AffixTypes.Prefix, 40, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Staff Attacks", 56, [9, 12], [19, 22], Groups.Staff, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Scorching", AffixTypes.Prefix, 51, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Staff Attacks", 56, [11, 15], [23, 27], Groups.Staff, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Incinerating", AffixTypes.Prefix, 62, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Staff Attacks", 56, [13, 18], [27, 31], Groups.Staff, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Blasting", AffixTypes.Prefix, 72, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Staff Attacks", 56, [16, 22], [32, 38], Groups.Staff, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Cremating", AffixTypes.Prefix, 84, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Staff Attacks", 56, [19, 25], [39, 45], Groups.Staff, Categories.FlatFireDamage));
        //Cold Damage to Dagger Attacks
        this.Modlist.push(new Mod("Frosted", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Dagger Attacks", 56, [6, 9], [13, 16], Groups.Dagger, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Freezing", AffixTypes.Prefix, 38, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Dagger Attacks", 56, [8, 11], [16, 19], Groups.Dagger, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Frozen", AffixTypes.Prefix, 47, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Dagger Attacks", 56, [10, 13], [20, 24], Groups.Dagger, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Glaciated", AffixTypes.Prefix, 59, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Dagger Attacks", 56, [12, 16], [24, 28], Groups.Dagger, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Polar", AffixTypes.Prefix, 68, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Dagger Attacks", 56, [14, 19], [29, 34], Groups.Dagger, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Entombing", AffixTypes.Prefix, 83, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Dagger Attacks", 56, [17, 22], [34, 40], Groups.Dagger, Categories.FlatColdDamage));
        //Cold Damage to Claw Attacks
        this.Modlist.push(new Mod("Frosted", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Claw Attacks", 56, [6, 9], [13, 16], Groups.Claw, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Freezing", AffixTypes.Prefix, 38, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Claw Attacks", 56, [8, 11], [16, 19], Groups.Claw, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Frozen", AffixTypes.Prefix, 47, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Claw Attacks", 56, [10, 13], [20, 24], Groups.Claw, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Glaciated", AffixTypes.Prefix, 59, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Claw Attacks", 56, [12, 16], [24, 28], Groups.Claw, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Polar", AffixTypes.Prefix, 68, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Claw Attacks", 56, [14, 19], [29, 34], Groups.Claw, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Entombing", AffixTypes.Prefix, 83, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Claw Attacks", 56, [17, 22], [34, 40], Groups.Claw, Categories.FlatColdDamage));
        //Cold Damage to Sword Attacks
        this.Modlist.push(new Mod("Frosted", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Sword Attacks", 56, [6, 9], [13, 16], Groups.Sword, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Freezing", AffixTypes.Prefix, 38, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Sword Attacks", 56, [8, 11], [16, 19], Groups.Sword, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Frozen", AffixTypes.Prefix, 47, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Sword Attacks", 56, [10, 13], [20, 24], Groups.Sword, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Glaciated", AffixTypes.Prefix, 59, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Sword Attacks", 56, [12, 16], [24, 28], Groups.Sword, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Polar", AffixTypes.Prefix, 68, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Sword Attacks", 56, [14, 19], [29, 34], Groups.Sword, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Entombing", AffixTypes.Prefix, 83, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Sword Attacks", 56, [17, 22], [34, 40], Groups.Sword, Categories.FlatColdDamage));
        //Cold Damage to Axe Attacks
        this.Modlist.push(new Mod("Frosted", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Axe Attacks", 56, [6, 9], [13, 16], Groups.Axe, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Freezing", AffixTypes.Prefix, 38, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Axe Attacks", 56, [8, 11], [16, 19], Groups.Axe, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Frozen", AffixTypes.Prefix, 47, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Axe Attacks", 56, [10, 13], [20, 24], Groups.Axe, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Glaciated", AffixTypes.Prefix, 59, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Axe Attacks", 56, [12, 16], [24, 28], Groups.Axe, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Polar", AffixTypes.Prefix, 68, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Axe Attacks", 56, [14, 19], [29, 34], Groups.Axe, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Entombing", AffixTypes.Prefix, 83, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Axe Attacks", 56, [17, 22], [34, 40], Groups.Axe, Categories.FlatColdDamage));
        //Cold Damage to Mace Attacks
        this.Modlist.push(new Mod("Frosted", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Mace Attacks", 56, [6, 9], [13, 16], Groups.Mace, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Freezing", AffixTypes.Prefix, 38, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Mace Attacks", 56, [8, 11], [16, 19], Groups.Mace, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Frozen", AffixTypes.Prefix, 47, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Mace Attacks", 56, [10, 13], [20, 24], Groups.Mace, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Glaciated", AffixTypes.Prefix, 59, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Mace Attacks", 56, [12, 16], [24, 28], Groups.Mace, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Polar", AffixTypes.Prefix, 68, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Mace Attacks", 56, [14, 19], [29, 34], Groups.Mace, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Entombing", AffixTypes.Prefix, 83, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Mace Attacks", 56, [17, 22], [34, 40], Groups.Mace, Categories.FlatColdDamage));
        //Cold Damage to Staff Attacks
        this.Modlist.push(new Mod("Frosted", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Staff Attacks", 56, [6, 9], [13, 16], Groups.Staff, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Freezing", AffixTypes.Prefix, 38, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Staff Attacks", 56, [8, 11], [16, 19], Groups.Staff, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Frozen", AffixTypes.Prefix, 47, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Staff Attacks", 56, [10, 13], [20, 24], Groups.Staff, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Glaciated", AffixTypes.Prefix, 59, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Staff Attacks", 56, [12, 16], [24, 28], Groups.Staff, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Polar", AffixTypes.Prefix, 68, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Staff Attacks", 56, [14, 19], [29, 34], Groups.Staff, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Entombing", AffixTypes.Prefix, 83, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Staff Attacks", 56, [17, 22], [34, 40], Groups.Staff, Categories.FlatColdDamage));
        //Energy Shield Regenerated per second
        this.Modlist.push(new Mod("Captivating", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "+r1 Energy Shield Regenerated per second", 28, [2, 4], [0, 0], Groups.None, Categories.ESRegenPerSecond));
        this.Modlist.push(new Mod("Beautiful", AffixTypes.Prefix, 30, ItemTypes.MurderousEyeJewel, "+r1 Energy Shield Regenerated per second", 28, [5, 8], [0, 0], Groups.None, Categories.ESRegenPerSecond));
        this.Modlist.push(new Mod("Breathtaking", AffixTypes.Prefix, 60, ItemTypes.MurderousEyeJewel, "+r1 Energy Shield Regenerated per second", 28, [9, 12], [0, 0], Groups.None, Categories.ESRegenPerSecond));
        //Life Regenerated per second
        this.Modlist.push(new Mod("Youthful", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "+r1 Life Regenerated per second", 56, [2, 4], [0, 0], Groups.None, Categories.LifeRegenPerSecond));
        this.Modlist.push(new Mod("Spirited", AffixTypes.Prefix, 40, ItemTypes.MurderousEyeJewel, "+r1 Life Regenerated per second", 56, [5, 8], [0, 0], Groups.None, Categories.LifeRegenPerSecond));
        this.Modlist.push(new Mod("Vivacious", AffixTypes.Prefix, 80, ItemTypes.MurderousEyeJewel, "+r1 Life Regenerated per second", 56, [9, 12], [0, 0], Groups.None, Categories.LifeRegenPerSecond));
        //Mana Regenerated per second
        this.Modlist.push(new Mod("Energising", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "+r1 Mana Regenerated per second", 39, [0.5, 1], [0, 0], Groups.None, Categories.ManaRegenPerSecond));
        this.Modlist.push(new Mod("Inspirational", AffixTypes.Prefix, 40, ItemTypes.MurderousEyeJewel, "+r1 Mana Regenerated per second", 39, [1.1, 2], [0, 0], Groups.None, Categories.ManaRegenPerSecond));
        this.Modlist.push(new Mod("Resonating", AffixTypes.Prefix, 75, ItemTypes.MurderousEyeJewel, "+r1 Mana Regenerated per second", 39, [2.1, 3], [0, 0], Groups.None, Categories.ManaRegenPerSecond));
        //Armour
        this.Modlist.push(new Mod("Lacquered", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "+r1 to Armour", 68, [36, 60], [0, 0], Groups.None, Categories.Armour));
        this.Modlist.push(new Mod("Fortified", AffixTypes.Prefix, 40, ItemTypes.MurderousEyeJewel, "+r1 to Armour", 68, [61, 100], [0, 0], Groups.None, Categories.Armour));
        this.Modlist.push(new Mod("Carapaced", AffixTypes.Prefix, 75, ItemTypes.MurderousEyeJewel, "+r1 to Armour", 68, [101, 180], [0, 0], Groups.None, Categories.Armour));
        //Evasion Rating
        this.Modlist.push(new Mod("Agile", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "+r1 to Evasion Rating", 68, [36, 60], [0, 0], Groups.None, Categories.EvasionRating));
        this.Modlist.push(new Mod("Fleet", AffixTypes.Prefix, 40, ItemTypes.MurderousEyeJewel, "+r1 to Evasion Rating", 68, [61, 100], [0, 0], Groups.None, Categories.EvasionRating));
        this.Modlist.push(new Mod("Vaporous", AffixTypes.Prefix, 75, ItemTypes.MurderousEyeJewel, "+r1 to Evasion Rating", 68, [101, 180], [0, 0], Groups.None, Categories.EvasionRating));
        //Energy Shield
        this.Modlist.push(new Mod("Shining", AffixTypes.Prefix, 1, ItemTypes.MurderousEyeJewel, "+r1 to maximum Energy Shield", 68, [25, 30], [0, 0], Groups.None, Categories.ES));
        this.Modlist.push(new Mod("Seething", AffixTypes.Prefix, 40, ItemTypes.MurderousEyeJewel, "+r1 to maximum Energy Shield", 68, [31, 35], [0, 0], Groups.None, Categories.ES));
        this.Modlist.push(new Mod("Incandescent", AffixTypes.Prefix, 75, ItemTypes.MurderousEyeJewel, "+r1 to maximum Energy Shield", 68, [36, 45], [0, 0], Groups.None, Categories.ES));
        this.Modlist.push(new Mod("Resplendent", AffixTypes.Prefix, 83, ItemTypes.MurderousEyeJewel, "+r1 to maximum Energy Shield", 68, [46, 50], [0, 0], Groups.None, Categories.ES));
        //End Prefixes


        //Suffixes
        //Elemental Ailments
        this.Modlist.push(new Mod("Of Chilling", AffixTypes.Suffix, 30, ItemTypes.MurderousEyeJewel, "r1% increased Effect of Chill", 102, [6, 10], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Shocking", AffixTypes.Suffix, 30, ItemTypes.MurderousEyeJewel, "r1% increased Effect of Shock", 102, [6, 10], [0, 0], Groups.None, Categories.None));
        //Attributes
        this.Modlist.push(new Mod("Of Strength", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1 to Strength", 102, [12, 16], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Dexterity", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1 to Dexterity", 102, [12, 16], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Intelligence", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1 to Intelligence", 102, [12, 16], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Athletics", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1 to Strength and Dexterity", 102, [8, 10], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Spirit", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1 to Strength and Intelligence", 102, [8, 10], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Cunning", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1 to Dexterity and Intelligence", 102, [8, 10], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Adaption", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1 to all Attributes", 51, [6, 8], [0, 0], Groups.None, Categories.None));
        //Resistances
        this.Modlist.push(new Mod("Of the Dragon", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1% to Fire Resistance", 82, [12, 15], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of the Beast", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1% to Cold Resistance", 82, [12, 15], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Grounding", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1% to Lightning Resistance", 82, [12, 15], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of the Hearth", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1% to Fire and Cold Resistances", 51, [10, 12], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Insulation", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1% to Fire and Lightning Resistances", 51, [10, 12], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Shelter", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1% to Cold and Lightning Resistances", 51, [10, 12], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Resistance", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1% to All Resistances", 41, [8, 10], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Order", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1% to Chaos Resistance", 20, [7, 13], [0, 0], Groups.None, Categories.None));
        //Attack Speed
        this.Modlist.push(new Mod("Of Berserking", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% increased Attack Speed", 153, [3, 5], [0, 0], Groups.None, Categories.None));
        //Global Critical Strike Chance
        this.Modlist.push(new Mod("Of Menace", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% increased Global Critical Strike Chance", 286, [8, 12], [0, 0], Groups.None, Categories.None));
        //Global Critical Strike Multiplier
        this.Modlist.push(new Mod("Of Potency", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% to Global Critical Strike Multiplier", 184, [9, 12], [0, 0], Groups.None, Categories.None));
        //Fire Damage to Attacks
        this.Modlist.push(new Mod("Of Coals", AffixTypes.Suffix, 35, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Attacks", 153, [6, 10], [14, 18], Groups.None, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Of Cinders", AffixTypes.Suffix, 44, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Attacks", 153, [9, 12], [19, 23], Groups.None, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Of Flames", AffixTypes.Suffix, 52, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Attacks", 153, [11, 15], [24, 28], Groups.None, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Of Immolation", AffixTypes.Suffix, 64, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Attacks", 153, [13, 19], [28, 34], Groups.None, Categories.FlatFireDamage));
        this.Modlist.push(new Mod("Of Ashes", AffixTypes.Suffix, 76, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Fire Damage to Attacks", 153, [15, 21], [34, 40], Groups.None, Categories.FlatFireDamage));
        //Cold Damage to Attacks
        this.Modlist.push(new Mod("Of Sleet", AffixTypes.Suffix, 36, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Attacks", 153, [6, 9], [12, 15], Groups.None, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Of Ice", AffixTypes.Suffix, 45, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Attacks", 153, [8, 11], [15, 19], Groups.None, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Of Rime", AffixTypes.Suffix, 53, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Attacks", 153, [10, 14], [20, 24], Groups.None, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Of Floe", AffixTypes.Suffix, 65, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Attacks", 153, [12, 16], [25, 30], Groups.None, Categories.FlatColdDamage));
        this.Modlist.push(new Mod("Of Glaciation", AffixTypes.Suffix, 77, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Cold Damage to Attacks", 153, [14, 19], [31, 37], Groups.None, Categories.FlatColdDamage));
        //Lightning Damage to Attacks
        this.Modlist.push(new Mod("Of Static", AffixTypes.Suffix, 35, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Attacks", 153, [1, 2], [27, 29], Groups.None, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Of Electricity", AffixTypes.Suffix, 44, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Attacks", 153, [1, 3], [35, 38], Groups.None, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Of Voltage", AffixTypes.Suffix, 52, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Attacks", 153, [1, 4], [42, 45], Groups.None, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Of Discharge", AffixTypes.Suffix, 64, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Attacks", 153, [2, 5], [51, 55], Groups.None, Categories.FlatLightningDamage));
        this.Modlist.push(new Mod("Of Arcing", AffixTypes.Suffix, 76, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Lightning Damage to Attacks", 153, [2, 6], [62, 68], Groups.None, Categories.FlatLightningDamage));
        //Physical Damage to Attacks
        this.Modlist.push(new Mod("Of Weight", AffixTypes.Suffix, 34, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Attacks", 153, [1, 1], [3, 4], Groups.None, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Of Impact", AffixTypes.Suffix, 45, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Attacks", 153, [2, 3], [5, 6], Groups.None, Categories.FlatPhysicalDamage));
        this.Modlist.push(new Mod("Of Collision", AffixTypes.Suffix, 61, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Physical Damage to Attacks", 153, [4, 5], [7, 8], Groups.None, Categories.FlatPhysicalDamage));
        //Chaos Damage to Attacks
        this.Modlist.push(new Mod("Of Malevolence", AffixTypes.Suffix, 36, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Chaos Damage to Attacks", 153, [1, 1], [3, 4], Groups.None, Categories.FlatChaosDamage));
        this.Modlist.push(new Mod("Of Malice", AffixTypes.Suffix, 48, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Chaos Damage to Attacks", 153, [2, 3], [5, 6], Groups.None, Categories.FlatChaosDamage));
        this.Modlist.push(new Mod("Of Sin", AffixTypes.Suffix, 64, ItemTypes.MurderousEyeJewel, "Adds r1 to r2 Chaos Damage to Attacks", 153, [4, 5], [7, 8], Groups.None, Categories.FlatChaosDamage));
        //Blind Enemies on Hit with Attacks
        this.Modlist.push(new Mod("Of Blinding", AffixTypes.Suffix, 32, ItemTypes.MurderousEyeJewel, "r1% chance to Blind Enemies on Hit with Attacks", 163, [3, 4], [0, 0], Groups.None, Categories.BlindOnHit));
        this.Modlist.push(new Mod("Of Blinding", AffixTypes.Suffix, 65, ItemTypes.MurderousEyeJewel, "r1% chance to Blind Enemies on Hit with Attacks", 82, [5, 6], [0, 0], Groups.None, Categories.BlindOnHit));
        //Taunt Enemies on Hit with Attacks
        this.Modlist.push(new Mod("Of Taunting", AffixTypes.Suffix, 32, ItemTypes.MurderousEyeJewel, "r1% chance to Taunt Enemies on Hit with Attacks", 163, [3, 5], [0, 0], Groups.None, Categories.TauntOnHit));
        this.Modlist.push(new Mod("Of Taunting", AffixTypes.Suffix, 65, ItemTypes.MurderousEyeJewel, "r1% chance to Taunt Enemies on Hit with Attacks", 82, [6, 8], [0, 0], Groups.None, Categories.TauntOnHit));
        //Increased Damage against Abyssal Monsters
        this.Modlist.push(new Mod("Of Banishment", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% increased Damage against Abyssal Monsters", 204, [30, 40], [0, 0], Groups.None, Categories.None));
        //Additional Physical Damage Reduction against Abyssal Monsters
        this.Modlist.push(new Mod("Of Warding", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% additional Physical Damage Reduction against Abyssal Monsters", 204, [4, 6], [0, 0], Groups.None, Categories.None));
        //Avoid Ailments
        this.Modlist.push(new Mod("Of Extinguishing", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% chance to Avoid being Ignited", 61, [6, 8], [0, 0], Groups.None, Categories.AvoidIgnite));
        this.Modlist.push(new Mod("Of Extinguishing", AffixTypes.Suffix, 30, ItemTypes.MurderousEyeJewel, "r1% chance to Avoid being Ignited", 31, [9, 10], [0, 0], Groups.None, Categories.AvoidIgnite));
        this.Modlist.push(new Mod("Of Warming", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% chance to Avoid being Chilled\nr1% chance to Avoid being Frozen", 61, [6, 8], [0, 0], Groups.None, Categories.AvoidChillFreeze));
        this.Modlist.push(new Mod("Of Warming", AffixTypes.Suffix, 30, ItemTypes.MurderousEyeJewel, "r1% chance to Avoid being Chilled\nr1% chance to Avoid being Frozen", 31, [9, 10], [0, 0], Groups.None, Categories.AvoidChillFreeze));
        this.Modlist.push(new Mod("Of Insulating", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% chance to Avoid being Shocked", 61, [6, 8], [0, 0], Groups.None, Categories.AvoidShock));
        this.Modlist.push(new Mod("Of Insulating", AffixTypes.Suffix, 30, ItemTypes.MurderousEyeJewel, "r1% chance to Avoid being Shocked", 31, [9, 10], [0, 0], Groups.None, Categories.AvoidShock));
        this.Modlist.push(new Mod("Of Tolerance", AffixTypes.Suffix, 20, ItemTypes.MurderousEyeJewel, "r1% chance to Avoid being Poisoned", 61, [6, 8], [0, 0], Groups.None, Categories.AvoidPoison));
        this.Modlist.push(new Mod("Of Tolerance", AffixTypes.Suffix, 50, ItemTypes.MurderousEyeJewel, "r1% chance to Avoid being Poisoned", 31, [9, 10], [0, 0], Groups.None, Categories.AvoidPoison));
        this.Modlist.push(new Mod("Of Mending", AffixTypes.Suffix, 20, ItemTypes.MurderousEyeJewel, "r1% chance to Avoid Bleeding", 61, [6, 8], [0, 0], Groups.None, Categories.AvoidBleeding));
        this.Modlist.push(new Mod("Of Mending", AffixTypes.Suffix, 50, ItemTypes.MurderousEyeJewel, "r1% chance to Avoid Bleeding", 31, [9, 10], [0, 0], Groups.None, Categories.AvoidBleeding));
        this.Modlist.push(new Mod("Of Unwavering", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% chance to Avoid being Stunned", 61, [6, 8], [0, 0], Groups.None, Categories.AvoidStun));
        this.Modlist.push(new Mod("Of Unwavering", AffixTypes.Suffix, 20, ItemTypes.MurderousEyeJewel, "r1% chance to Avoid being Stunned", 31, [9, 10], [0, 0], Groups.None, Categories.AvoidStun));
        //Accuracy Rating
        this.Modlist.push(new Mod("Of Steadiness", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1 to Accuracy Rating", 102, [31, 60], [0, 0], Groups.None, Categories.FlatAccuracy));
        this.Modlist.push(new Mod("Of the Marksman", AffixTypes.Suffix, 52, ItemTypes.MurderousEyeJewel, "+r1 to Accuracy Rating", 102, [61, 120], [0, 0], Groups.None, Categories.FlatAccuracy));
        this.Modlist.push(new Mod("Of the Ranger", AffixTypes.Suffix, 78, ItemTypes.MurderousEyeJewel, "+r1 to Accuracy Rating", 102, [121, 240], [0, 0], Groups.None, Categories.FlatAccuracy));        
        //Miscellaneous Mods
        this.Modlist.push(new Mod("Of Instinct", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% chance to Block Spells if you were Damaged by a Hit Recently", 102, [2, 2], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Confidence", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% additional Physical Damage Reduction if you weren't Damaged by a Hit Recently", 204, [2, 2], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Momentum", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% increased Movement Speed if you haven't taken Damage Recently", 102, [3, 4], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of the Slayer", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% increased Damage if you've Killed Recently", 204, [15, 20], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of the Assassin", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "+r1% to Critical Strike Multiplier if you've Killed Recently", 102, [8, 14], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of the Guardian", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% increased Armour if you haven't Killed Recently", 204, [20, 30], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of the Deadeye", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% increased Accuracy Rating if you haven't Killed Recently", 102, [20, 30], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of the Inquisitor", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "Damage Penetrates r1% Elemental Resistances if you haven't Killed Recently", 102, [2, 2], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Maneuvering", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% increased Evasion Rating while moving", 102, [25, 35], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Praxis", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% increased Mana Regeneration while moving", 102, [20, 25], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Vivaciousness", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% of Life Regenerated per second while moving", 204, [0.5, 1], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of the Inferno", AffixTypes.Suffix, 40, ItemTypes.MurderousEyeJewel, "Gain r1% of Physical Damage as Extra Fire Damage if you've dealt a Critical Strike Recently", 122, [2, 4], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Opportunity", AffixTypes.Suffix, 25, ItemTypes.MurderousEyeJewel, "r1% increased Attack Speed if you've dealt a Critical Strike Recently", 204, [6, 8], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Abuse", AffixTypes.Suffix, 25, ItemTypes.MurderousEyeJewel, "r1% increased Cast Speed if you've dealt a Critical Strike Recently", 102, [5, 7], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Preparation", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% increased Critical Strike Chance if you haven't dealt a Critical Strike Recently", 102, [20, 30], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Readiness", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% chance to Dodge Attack and Spell Hits if you've been Hit Recently", 102, [2, 2], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of the Raider", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% increased Movement Speed if you've Killed Recently", 102, [2, 4], [0, 0], Groups.None, Categories.None));
        this.Modlist.push(new Mod("Of Guarding", AffixTypes.Suffix, 1, ItemTypes.MurderousEyeJewel, "r1% additional Block Chance if you were Damaged by a Hit Recently", 204, [2, 2], [0, 0], Groups.None, Categories.None));
        //Onslaught On Kill
        this.Modlist.push(new Mod("Of Onslaught", AffixTypes.Suffix, 10, ItemTypes.MurderousEyeJewel, "r1% chance to gain Onslaught for 4 seconds on Kill", 204, [3, 5], [0, 0], Groups.None, Categories.OnslaughtOnKill));
        this.Modlist.push(new Mod("Of Onslaught", AffixTypes.Suffix, 50, ItemTypes.MurderousEyeJewel, "r1% chance to gain Onslaught for 4 seconds on Kill", 102, [6, 8], [0, 0], Groups.None, Categories.OnslaughtOnKill));
        //Unholy Might on Kill
        this.Modlist.push(new Mod("Of Unholy Might", AffixTypes.Suffix, 40, ItemTypes.MurderousEyeJewel, "r1% chance to gain Unholy Might for 4 seconds on Kill", 204, [2, 3], [0, 0], Groups.None, Categories.UnholyMightOnMeleeKill));
        this.Modlist.push(new Mod("Of Unholy Might", AffixTypes.Suffix, 80, ItemTypes.MurderousEyeJewel, "r1% chance to gain Unholy Might for 4 seconds on Kill", 102, [4, 5], [0, 0], Groups.None, Categories.UnholyMightOnMeleeKill));
        //End Suffixes
    }    
}
