using System.ComponentModel.DataAnnotations;

namespace PCPApi.Entities;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("visual_config")]
public class VisualConfig
{
    [Key]
    [Column("visualConfigId")]
    public int VisualConfigId { get; set; }

    [Column("companyId")]
    public int CompanyId { get; set; }

    [MaxLength(255)]
    [Column("primaryColor")]
    public string PrimaryColor { get; set; }

    [MaxLength(255)]
    [Column("secondaryColor")]
    public string SecondaryColor { get; set; }

    [MaxLength(255)]
    [Column("titleFont")]
    public string TitleFont { get; set; }

    [MaxLength(255)]
    [Column("logoURL")]
    public string LogoURL { get; set; }

    [ForeignKey("CompanyId")]
    public Company Company { get; set; }
}

