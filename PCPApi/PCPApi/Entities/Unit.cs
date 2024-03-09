namespace PCPApi.Entities;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("unit")]
public class Unit
{
    [Key]
    [Column("unitId")]
    public int UnitId { get; set; }

    [MaxLength(255)]
    [Column("unitName")]
    public string UnitName { get; set; }

    [InverseProperty("Unit")]
    public List<Commodity> Commodities { get; set; }
}
