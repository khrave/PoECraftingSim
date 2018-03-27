export enum AffixTypes {
    Prefix,
    Suffix
}

export enum ItemTypes {
    GhastlyEyeJewel,
    HypnoticEyeJewel,
    MurderousEyeJewel,
    SearchingEyeJewel,
}

//TODO - My enums have to have a 'None' type right now because I don't know how to send in 
//null/undefined. I desperately want to change this in the future

//You can never have 2 mods from the same category. That would be like having
//Hale AND Stalwart on an abyss jewel resulting in the following description:
//+(25-30) to maximum Life
//+(46-50) to maximum Life
export enum Categories {
    None,
    FlatLife,
    FlatMana,
    DamageOverTime,
    FlatPhysicalDamage,
    FlatLightningDamage,
    FlatFireDamage,
    FlatColdDamage,
    FlatChaosDamage,
    ESRegenPerSecond,
    LifeRegenPerSecond,
    ManaRegenPerSecond,
    Armour,
    Evasion,
    ES,
    BlindOnHit,
    TauntOnHit,
    AvoidIgnite,
    AvoidShock,
    AvoidBleeding,
    AvoidStun,
    FlatAccuracy,
    OnslaughtOnKill,
    UnholyMightOnMeleeKill
}

//You can never have 2 mods from differing Groups on the same abyss jewel. (That could change when/if I get to weapons).
//That would be like having both Glinting(Dagger) AND Flaring(Sword) on an abyss jewel resulting in the following description:
//Adds (1-2) to (3-4) Physical Damage to Dagger Attacks
//Adds (7-8) to (10-12) Physical Damage to Sword Attacks
export enum Groups {
    None,
    Axe,
    Bow,
    Claw,
    Dagger,
    DualWielding,
    Mace,
    Shield,
    Staff,
    Sword,
    TwoHanded,
    Fire,
    Lightning,
    Cold,
    Wand,
}
