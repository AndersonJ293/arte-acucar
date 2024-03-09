using System.ComponentModel.DataAnnotations;

namespace PCPApi.Entities;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("visual_config")]
public class VisualConfig
{
    [Key]
    [Column("visualconfigid")]
    public int VisualConfigId { get; set; }

    [Column("companyid")]
    [Required]
    public int CompanyId { get; set; }

    [Column("primarycolor")]
    [MaxLength(255)]
    [Required]
    public string PrimaryColor { get; set; }

    [Column("secondarycolor")]
    [MaxLength(255)]
    [Required]
    public string SecondaryColor { get; set; }

    [Column("titlefont")]
    [MaxLength(255)]
    [Required]
    public string TitleFont { get; set; }

    [Column("logoURL")]
    [MaxLength(255)]
    public string? LogoURL { get; set; }

    [Column("created_at", TypeName = "timestamp")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at", TypeName = "timestamp")]
    public DateTime UpdatedAt { get; set; }

    [ForeignKey("CompanyId")]
    public Company Company { get; set; }
}
