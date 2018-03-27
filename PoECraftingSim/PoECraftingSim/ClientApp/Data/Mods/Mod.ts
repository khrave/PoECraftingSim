import * as Types from '../Types/Types';

export class Mod {
    public Name: string;
    public Type: Types.AffixTypes
    public ItemLevel: number;
    public ItemType: Types.ItemTypes;
    public Text: string;
    public Weight: number;
    public LowerRange: [number, number];
    public UpperRange: [number, number] | null;
    public Group: Types.Groups | null
    public Category: Types.Categories | null;

    constructor(name: string, type: Types.AffixTypes, itemLevel: number, itemType: Types.ItemTypes, text: string, weight: number,
        lowerRange: [number, number], upperRange: [number, number], group: Types.Groups, category: Types.Categories) {
        this.Name = name;
        this.Type = type;
        this.ItemLevel = itemLevel;
        this.ItemType = itemType;
        this.Text = text;
        this.Weight = weight;
        this.LowerRange = lowerRange;
        this.UpperRange = upperRange;
        this.Group = group;
        this.Category = category;
    }

    public Output = (assignedLowerValue: number, assignedUpperValue: number): string => {
        var text = this.Text.replace("r1", assignedLowerValue.toString());
        return text.replace("r2", assignedUpperValue.toString());
    }
}

